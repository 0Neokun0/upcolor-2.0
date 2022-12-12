const express = require("express")
const router = express.Router()

const axios = require("axios")

const jwt = require("jsonwebtoken")
const config = require("./config")
const get = require("./function/get")
const sql = require("./function/sql")

router.use((req, res, next) => {
    console.log("[teamWork] Time: ", Date.now())
    next()
})

router.post("/addTeamWork", async (req, res) => {
    const userId = get.userId(req)
    const teamName = req.body.teamName
    const teamWorkName = req.body.teamWorkName
    const setChatPublish = req.body.setChatPublish
    const setGanttPublish = req.body.setGanttPublish

    const sqlInsertTeamWork = `
        INSERT INTO team_works_list(
            created_user_id,
            team_name,
            team_work_name,
            publish_team_chat,
            publish_team_ganttchart,
            registered_team_work_on
        )
        VALUES(
            ?,
            ?,
            ?,
            ?,
            ?,
            0
        )
    `
    const teamWork = await sql.handleInsert(sqlInsertTeamWork, [userId, teamName, teamWorkName, setChatPublish, setGanttPublish])

    const teamWorkId = teamWork["insertId"]

    const sqlInsertjoinTeam = `
        INSERT INTO users_joined_team_work(
            team_work_id,
            joined_user_id
        )
        VALUES(
            ?,
            ?
        )
    `
    await sql.handleInsert(sqlInsertjoinTeam, [teamWorkId, userId])

    const sqlUpdateStudent = `
        UPDATE
            student_profiles
        SET
            is_colaborating = ?
        WHERE
            user_id = ?
    `
    await sql.handleUpdate(sqlUpdateStudent, [teamWorkId, userId])
})

router.post("/getTeamWork", async (req, res) => {
    const teamId = req.body.teamId

    const sqlSelectTeamInfo = `
        SELECT
            team_works_list.team_name,
            team_works_list.team_work_name,
            team_works_list.team_work_course,
            team_works_list.team_work_description,
            team_works_list.team_target,
            team_works_list.team_concept,
            team_works_list.team_strategy,
            team_works_list.technology_used,
            team_works_list.publish_team_chat,
            team_works_list.publish_team_ganttchart,
            team_works_list.registered_team_work_on
        FROM
            team_works_list
        WHERE
            team_work_id = ?
    `
    const sqlSelectTeamMembers = `
        SELECT
            user_profiles.user_id,
            user_profiles.user_name
        FROM
            users_joined_team_work
            INNER JOIN
                user_profiles ON
                users_joined_team_work.joined_user_id = user_profiles.user_id
        WHERE
            users_joined_team_work.team_work_id = ?
        GROUP BY
            user_id
    `

    const teamInfo = await sql.handleSelect(sqlSelectTeamInfo, [teamId])
    const teamMembers = await sql.handleSelect(sqlSelectTeamMembers, [teamId])

    res.json({
        "teamInfo": teamInfo[0],
        "teamMembers": teamMembers,
    })
})

router.post("/getJoinedTeamWork", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectJoinedTeam = `
        SELECT
            team_works_list.team_work_id,
            team_works_list.team_name,
            team_works_list.team_work_name,
            team_works_list.team_work_course,
            team_works_list.team_work_description,
            team_works_list.team_target,
            team_works_list.team_concept,
            team_works_list.team_strategy,
            team_works_list.technology_used,
            team_works_list.publish_team_chat,
            team_works_list.publish_team_ganttchart,
            team_works_list.registered_team_work_on
        FROM
            team_works_list
            INNER JOIN
                student_profiles ON
                team_works_list.team_work_id = student_profiles.is_colaborating
        WHERE
            student_profiles.user_id = ?
    `
    const joinedTeam = await sql.handleSelect(sqlSelectJoinedTeam, [userId])

    if (joinedTeam) {
        res.json(joinedTeam)
    } else {
        res.json(false)
    }
})

router.post("/getTeamMembers", async (req, res) => {
    const teamWorkId = req.body.teamWorkId

    const sqlSelectTeamMembers = `
    SELECT
        user_profiles.user_id,
        user_profiles.user_name
    FROM
        student_profiles
        INNER JOIN
            user_profiles ON
            student_profiles.user_id = user_profiles.user_id
    WHERE
        student_profiles.is_colaborating = ?
    `

    const members = await sql.handleSelect(sqlSelectTeamMembers, [teamWorkId])

    res.json(members)
})

router.post("/getList", async (req, res) => {
    try {
        const sqlSelectTeamList = `
            SELECT
                *
            FROM
                team_works_list
        `
        const teamList = await sql.handleSelect(sqlSelectTeamList)

        const sep = (/,|、|\//g)
        var suggest = teamList.map((value) => {
            if (value["technology_used"]) {
                return value["technology_used"].split(sep).map((tech) => {
                    return tech.trim()
                })
            }
        }).flat()

        suggest = [...new Set(suggest)].filter((ele) => ele).join(",")

        const getYomi = async (str) => {
            const getValue = await new Promise((response, reject) => {
                axios({
                    method: 'post',
                    url: "https://labs.goo.ne.jp/api/hiragana",
                    headers: {
                        'Content-Type': `application/json`
                    },
                    data: {
                        app_id: "28320eb4d74fdd649bd889ecace6f6740d3587991fa525141e643cf677efe46a",
                        sentence: str,
                        output_type: "hiragana",
                    }
                })
                    .then((res) => {
                        response(res.data.converted)
                    })
            })

            return getValue
        }

        var yomi = await getYomi(suggest)

        suggest = suggest.split(",")
        yomi = yomi.replace(/\s+/g, "").split(",")

        var suggestList = suggest.map((_, index) => {
            return {label: suggest[index], value: yomi[index]}
        })

        const courses = await get.list("course")

        res.json({
            team: teamList,
            suggest: suggestList,
            search: {
                courses: courses,
            },
        })
    } catch (error) {
        console.log(error)
        res.status(404)
    }
})

router.post("/getTeamChat", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectTeamId = `
        SELECT
            is_colaborating
        FROM
            student_profiles
        WHERE
            user_id = ?
    `
    const teamId = await sql.handleSelect(sqlSelectTeamId, [userId])

    if (teamId) {
        const sqlSelectTeamChat = `
            SELECT
                team_works_chat.*,
                user_profiles.user_name
            FROM
                team_works_chat
                INNER JOIN
                    user_profiles ON
                    team_works_chat.sent_user_id = user_profiles.user_id
            WHERE
                team_works_chat.received_team_work_id = ?
        `
        const teamChat = await sql.handleSelect(sqlSelectTeamChat, [teamId[0]["is_colaborating"]])

        res.json(teamChat)
    }
})

router.post("/sendChat", async (req, res) => {
    const userId = get.userId(req)
    const text = req.body.text

    const sqlSelectTeamId = `
        SELECT
            is_colaborating
        FROM
            student_profiles
        WHERE
            user_id = ?
    `
    const teamId = await sql.handleSelect(sqlSelectTeamId, [userId])

    const sqlInsertChat = `
        INSERT INTO team_works_chat(
            sent_user_id,
            received_team_work_id,
            sent_text
        )
        VALUES(
            ?,
            ?,
            ?
        )
    `
    await sql.handleInsert(sqlInsertChat, [userId, teamId[0]["is_colaborating"], text])

    const sqlSelectTeamChat = `
        SELECT
            team_works_chat.*,
            user_profiles.user_name
        FROM
            team_works_chat
            INNER JOIN
                user_profiles ON
                team_works_chat.sent_user_id = user_profiles.user_id
        WHERE
            received_team_work_id = ?
    `
    const teamChat = await sql.handleSelect(sqlSelectTeamChat, [teamId[0]["is_colaborating"]])

    res.json(teamChat)
})

router.post("/getGantt", async (req, res) => {
    const userId = get.userId(req)
    const teamId = await get.teamId(userId)


    const sqlSelectTasks = `
        SELECT
            task_id,
            task_name,
            task_start,
            task_end,
            task_progress,
            parent_task_id
        FROM
            gantt_tasks
        WHERE
            team_work_id = ?
    `
    const tasks = await sql.handleSelect(sqlSelectTasks, [teamId])

    const sqlSelectLinks = `
        SELECT
            link_id,
            source,
            target,
            type
        FROM
            gantt_links
        WHERE
            team_work_id = ?
    `
    const links = await sql.handleSelect(sqlSelectLinks, [teamId])

    res.json({
        tasks: tasks,
        links: links,
    })
})

router.post("/getViewGantt", async (req, res) => {
    const teamId = req.body.teamId

    const sqlSelectTasks = `
        SELECT
            task_id,
            task_name,
            task_start,
            task_end,
            task_progress,
            parent_task_id
        FROM
            gantt_tasks
        WHERE
            team_work_id = ?
    `
    const tasks = await sql.handleSelect(sqlSelectTasks, [teamId])

    const sqlSelectLinks = `
        SELECT
            link_id,
            source,
            target,
            type
        FROM
            gantt_links
        WHERE
            team_work_id = ?
    `
    const links = await sql.handleSelect(sqlSelectLinks, [teamId])

    res.json({
        tasks: tasks,
        links: links,
    })
})

router.post("/saveGantt", async (req, res) => {
    const userId = get.userId(req)
    const joinedTeamId = await get.teamId(userId)
    const tasks = req.body.tasks
    const links = req.body.links

    const sqlDeleteTasks = `
        DELETE
        FROM
            gantt_tasks
        WHERE
            team_work_id = ?
    `
    await sql.handleDelete(sqlDeleteTasks, [joinedTeamId])

    const sqlDeleteLinks = `
        DELETE
        FROM
            gantt_links
        WHERE
            team_work_id = ?
    `
    await sql.handleDelete(sqlDeleteLinks, [joinedTeamId])

    const sqlInsertTasks = `
        INSERT INTO gantt_tasks(
            team_work_id,
            task_id,
            task_name,
            task_start,
            task_end,
            task_progress,
            parent_task_id
        )
        VALUES(
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        )
    `
    tasks.map(async (task) => {
        const toJST = (time) => {
            const timestamp = new Date(time)

            return new Date(timestamp.getTime())
        }

        const start_date = toJST(task["start_date"])
        const end_date = toJST(task["end_date"])

        await sql.handleInsert(sqlInsertTasks, [joinedTeamId, task["id"], task["text"], start_date, end_date, task["progress"], task["parent"]])
    })

    const sqlInsertLinks = `
        INSERT INTO gantt_links(
            team_work_id,
            source,
            target,
            type
        )
        VALUES(
            ?,
            ?,
            ?,
            ?
        )
    `
    links.map(async (link) => {
        await sql.handleInsert(sqlInsertLinks, [joinedTeamId, link["source"], link["target"], link["type"]])
    })
})

router.post("/getInviteUrl", async (req, res) => {
    const userId = get.userId(req)
    const teamId = await get.teamId(userId)

    const token = jwt.sign({ teamId: teamId }, config.jwt.secret, config.jwt.options)

    res.json(token)
})

// return 0:チームが存在しないか、トークンの期限切れ 1:すでにチームに参加済み
router.post("/checkTeamWork", async (req, res) => {
    const userId = get.userId(req)
    const teamId = await get.teamId(userId)
    const token = req.body.token

    if (!teamId) {
        try {
            jwt.verify(token, config.jwt.secret, async (err, result) => {
                const sqlSelectTeam = `
                    SELECT
                        team_name
                    FROM
                        team_works_list
                    WHERE
                        team_work_id = ?
                `

                const team = await sql.handleSelect(sqlSelectTeam, [result["teamId"]])
                res.json(team[0])
            })
        } catch (error) {
            res.json(0)
        }
    } else {
        res.json(1)
    }
})

router.post("/leaveTeam", async (req, res) => {
    const userId = get.userId(req)

    const sqlUpdateColab = `
        UPDATE
            student_profiles
        SET
            is_colaborating = 0
        WHERE
            user_id = ?
    `
    await sql.handleUpdate(sqlUpdateColab, [userId])
})

router.post("/updateTeamWorkInfo", async (req, res) => {
    const userId = get.userId(req)
    const teamId = await get.teamId(userId)

    const type = req.body.type
    const content = req.body.content

    if (type === "description") {
        const sqlUpdateDescription = `
            UPDATE
                team_works_list
            SET
                team_work_description = ?
            WHERE
                team_work_id = ?
        `

        await sql.handleUpdate(sqlUpdateDescription, [content, teamId])
        res.json(true)
    }

    if (type === "target") {
        const sqlUpdateTarget = `
            UPDATE
                team_works_list
            SET
                team_target = ?
            WHERE
                team_work_id = ?
        `

        await sql.handleUpdate(sqlUpdateTarget, [content, teamId])
        res.json(true)
    }

    if (type === "strategy") {
        const sqlUpdateStrategy = `
            UPDATE
                team_works_list
            SET
                team_strategy = ?
            WHERE
                team_work_id = ?
        `

        await sql.handleUpdate(sqlUpdateStrategy, [content, teamId])
        res.json(true)
    }

    if (type === "technology") {
        const sqlUpdateTechnology = `
            UPDATE
                team_works_list
            SET
                technology_used= ?
            WHERE
                team_work_id = ?
        `

        await sql.handleUpdate(sqlUpdateTechnology, [content, teamId])
        res.json(true)
    }
})

router.post("/updateJoinTeam", async (req, res) => {
    const userId = get.userId(req)
    const token = req.body.token

    try {
        const teamId = jwt.decode(token, config.jwt.secret)["teamId"]

        const sqlUpdateColab = `
            UPDATE
                student_profiles
            SET
                is_colaborating = ?
            WHERE
                user_id = ?
        `

        await sql.handleUpdate(sqlUpdateColab, [teamId, userId])

        const sqlInsertJoinedTeam = `
            INSERT INTO users_joined_team_work (
                team_work_id,
                joined_user_id
            )
            VALUES (
                ?,
                ?
            )
        `

        await sql.handleUpdate(sqlInsertJoinedTeam, [teamId, userId])

        res.json(true)
    } catch (error) {
        res.json(false)
    }
})

router.post("/getSetting", async (req, res) => {
    const userId = get.userId(req)
    const teamId = await get.teamId(userId)

    const sqlSelectSetting = `
        SELECT
            publish_team_chat,
            publish_team_ganttchart,
            registered_team_work_on
        FROM
            team_works_list
        WHERE
            team_work_id = ?
    `

    const settings = await sql.handleSelect(sqlSelectSetting, [teamId])

    res.json({
        chat: settings[0]["publish_team_chat"],
        gantt: settings[0]["publish_team_ganttchart"],
        invite: settings[0]["registered_team_work_on"]
    })
})

router.post("/getViewSetting", async (req, res) => {
    const teamId = req.body.teamId

    const sqlSelectSetting = `
        SELECT
            publish_team_chat,
            publish_team_ganttchart,
            registered_team_work_on
        FROM
            team_works_list
        WHERE
            team_work_id = ?
    `

    const settings = await sql.handleSelect(sqlSelectSetting, [teamId])

    res.json({
        chat: settings[0]["publish_team_chat"],
        gantt: settings[0]["publish_team_ganttchart"],
        invite: settings[0]["registered_team_work_on"]
    })
})

router.post("/updateSetting", async (req, res) => {
    const userId = get.userId(req)
    const teamId = await get.teamId(userId)

    const inviteState = req.body.inviteState
    const publishChat = req.body.publishChat
    const publishGantt = req.body.publishGantt

    const sqlUpdateInviteState = `
        UPDATE
            team_works_list
        SET
            publish_team_chat = ?,
            publish_team_ganttchart = ?,
            registered_team_work_on = ?
        WHERE
            team_work_id = ?
    `
    await sql.handleUpdate(sqlUpdateInviteState, [publishChat, publishGantt, inviteState, teamId])
})

router.post("/getJoinedTeam", async (req, res) => {
    const userId = get.userId(req)
    const joinedTeamId = await get.teamId(userId)

    const sqlSelectTeamInfo = `
        SELECT
            team_works_list.team_name,
            team_works_list.team_work_name,
            team_works_list.team_work_course,
            team_works_list.team_work_description,
            team_works_list.team_target,
            team_works_list.team_concept,
            team_works_list.team_strategy,
            team_works_list.technology_used,
            team_works_list.publish_team_chat,
            team_works_list.publish_team_ganttchart,
            team_works_list.registered_team_work_on
        FROM
            team_works_list
        WHERE
            team_work_id = ?
    `
    const sqlSelectTeamMembers = `
        SELECT
            user_profiles.user_id,
            user_profiles.user_name
        FROM
            users_joined_team_work
        INNER JOIN
            user_profiles ON
            users_joined_team_work.joined_user_id = user_profiles.user_id
        WHERE
            users_joined_team_work.team_work_id = ?
        GROUP BY
            user_id
    `

    const teamInfo = await sql.handleSelect(sqlSelectTeamInfo, [joinedTeamId])
    const teamMembers = await sql.handleSelect(sqlSelectTeamMembers, [joinedTeamId])

    res.json({
        "teamInfo": teamInfo[0],
        "teamMembers": teamMembers,
    })
})

module.exports = router