const express = require("express")
const router = express.Router()

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
    const teamWorkId = req.body.teamWorkId
    
    const sqlSelectTeam = `
        SELECT
            team_name,
            team_work_name,
            team_work_course,
            team_work_description,
            team_target,
            team_concept,
            team_strategy,
            technology_used,
            publish_team_chat,
            publish_team_ganttchart,
            registered_team_work_on
        FROM
            team_works_list
        WHERE
            team_work_id = ?
    `
    const team = await sql.handleSelect(sqlSelectTeam, [teamWorkId])

    res.json(team)
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
            users_joined_team_work
            INNER JOIN
                team_works_list ON
                users_joined_team_work.team_work_id = team_works_list.team_work_id
        WHERE
            users_joined_team_work.joined_user_id = ?
    `
    const joinedTeam = await sql.handleSelect(sqlSelectJoinedTeam, [userId])

    if (joinedTeam) {
        res.json(joinedTeam)
    } else {
        res.json(false)
    }
})

router.post("/getJoinedUser", async (req, res) => {
    const teamWorkId = req.body.teamWorkId

    const sqlSelectJoinedUser = `
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
    `
    const joinedUser = await sql.handleSelect(sqlSelectJoinedUser, [teamWorkId])

    res.json(joinedUser)
})

router.post("/getTeamWorkList", async (req, res) => {
    const sqlSelectTeamList = `
        SELECT
            *
        FROM
            team_works_list
    `
    const teamList = await sql.handleSelect(sqlSelectTeamList)

    res.json(teamList)
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
    const teamWorkId = req.body.teamWorkId

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
    const tasks = await sql.handleSelect(sqlSelectTasks, [teamWorkId])

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
    const links = await sql.handleSelect(sqlSelectLinks, [teamWorkId])

    res.json({
        tasks: tasks,
        links: links,
    })
})

router.post("/saveGantt", async (req, res) => {
    const teamWorkId = req.body.teamWorkId
    const tasks = req.body.tasks
    const links = req.body.links

    const sqlDeleteTasks = `
        DELETE
        FROM
            gantt_tasks
        WHERE
            team_work_id = ?
    `
    await sql.handleDelete(sqlDeleteTasks, [teamWorkId])

    const sqlDeleteLinks = `
        DELETE
        FROM
            gantt_links
        WHERE
            team_work_id = ?
    `
    await sql.handleDelete(sqlDeleteLinks, [teamWorkId])

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

        await sql.handleInsert(sqlInsertTasks, [teamWorkId, task["id"], task["text"], start_date, end_date, task["progress"], task["parent"]])
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
        await sql.handleInsert(sqlInsertLinks, [teamWorkId, link["source"], link["target"], link["type"]])
    })
})

router.post("/getInviteURL", (req, res) => {
    const teamWorkId = req.body.teamWorkId
    
    const token = jwt.sign({teamWorkId: teamWorkId}, config.jwt.secret, config.jwt.options)

    res.json(token)
})

router.post("/joinTeamWork", (req, res) => {
    const userId = get.userId(req)
    const token = req.body.token

    try {
        jwt.verify(token, config.jwt.secret, async (err, res) => {
            if (err) throw err
        
            const teamWorkId = res["teamWorkId"]

            const sqlSelectTeamId = `
                SELECT
                    is_colaborating
                FROM
                    student_profiles
                WHERE
                    user_id = ?
            `
            const teamId = await sql.handleSelectSql(sqlSelectTeamId [userId])

            if (!teamId[0]["is_colaborating"]) {
                const sqlSelectTeam = `
                    SELECT
                        team_name,
                        team_work_name,
                        team_work_course,
                        team_work_description,
                        team_target,
                        team_concept,
                        team_strategy,
                        technology_used,
                        publish_team_chat,
                        publish_team_ganttchart,
                        registered_team_work_on
                    FROM
                        team_works_list
                    WHERE
                        team_work_id = ?
                `
                const team = await sql.handleSelectSql(sqlSelectTeam, [teamWorkId])

                res.json(team)
            } else {
                res.json(false)
            }
        })
    } catch (err) {
        res.json(false)
    }
})

router.post("/leaveTeam", async (req, res) => {
    const userId = get.userId(req)

    const sqlDeleteJoinedUser = `
        DELETE
        FROM
            users_joined_team_work
        WHERE
            users_joined_team_work.joined_user_id = ?
    `
    await sql.handleDelete(sqlDeleteJoinedUser, [userId])

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
    const teamWorkId = req.body.teamWorkId
    const description = req.body.description
    const target = req.body.target
    const strategy = req.body.strategy

    const sqlUpdateTeamWorkInfo = `
        UPDATE
            team_works_list
        SET
            team_work_description = ?,
            team_target = ?,
            team_strategy = ?
        WHERE
            team_work_id = ?
    `

    await sql.handleUpdate(sqlUpdateTeamWorkInfo, [description, target, strategy, teamWorkId])
})

router.post("/getTeamMembers", async (req, res) => {
    const teamWorkId = req.body.teamWorkId

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
    `

    const members = await sql.handleSelect(sqlSelectTeamMembers, [teamWorkId])

    res.json(members)
})

module.exports = router