const express = require("express")
const router = express.Router()

const jwt = require("jsonwebtoken")
const config = require("./config")
const get = require("./function/get")
const sql = require("./function/sql")

router.use((req, res, next) => {
    console.log("[group] Time: ", Date.now())
    next()
})

/**
 * グループ参加
 * request: token
 * response: Boolean
 */
router.post("/joinGroup", async (req, res) => {
    const userId = get.userId(req)
    const token = req.body.token

    try {
        const groupId = jwt.decode(token, config.jwt.secret)["groupId"]

        const sqlSelectJoinedGroup = `
            SELECT
                ID
            FROM
                users_joined_group
            WHERE
                users_joined_group.group_id = ? AND
                users_joined_group.joined_user_id = ?
        `

        const count = await sql.handleSelect(sqlSelectJoinedGroup, [groupId, userId])

        if (!count.length) {
            const sqlInsertJoinedGroup = `
                INSERT INTO users_joined_group (
                    group_id,
                    joined_user_id
                )
                VALUES (
                    ?,
                    ?
                )
            `

            await sql.handleInsert(sqlInsertJoinedGroup, [groupId, userId])

            res.json(true)
        } else {
            res.json(false)
        }
    } catch (error) {
        res.json(false)
    }
})

router.post("/addGroup", async (req, res) => {
    const userId = get.userId(req)
    const name = req.body.name

    const sqlInsertGroup = `
        INSERT INTO groups_list(
            created_user_id,
            group_name
        )
        VALUES(
            ?,
            ?
        )
    `
    const group = await sql.handleInsert(sqlInsertGroup, [userId, name])

    const groupId = group["insertId"]

    const sqlInsertJoinedGroup = `
        INSERT INTO users_joined_group(
            group_id,
            joined_user_id
        )
        VALUES(
            ?,
            ?
        )
    `
    await sql.handleInsert(sqlInsertJoinedGroup, [groupId, userId])
})

router.post("/getJoinedGroupList", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectJoinGroup = `
        SELECT
            groups_list.group_id,
            groups_list.created_user_id,
            groups_list.group_name
        FROM
            groups_list
        INNER JOIN
            users_joined_group ON
            groups_list.group_id = users_joined_group.group_id
        WHERE
            users_joined_group.joined_user_id = ?
    `
    const groupsList = await sql.handleSelect(sqlSelectJoinGroup, [userId])

    res.json({
        groupsList: groupsList,
        userId: userId,
    })
})

router.post("/sendChat", async (req, res) => {
    const userId = get.userId(req)
    const groupId = req.body.groupId
    const text = req.body.text

    const sqlInsertChat = `
        INSERT INTO group_chat(
            sent_user_id,
            received_group_id,
            sent_text
        )
        VALUES(
            ?,
            ?,
            ?
        )
    `
    await sql.handleInsert(sqlInsertChat, [userId, groupId, text])

    const sqlSelectGroupChat = `
        SELECT
            group_chat.*,
            user_profiles.user_name
        FROM
            group_chat
            INNER JOIN
                user_profiles ON
                group_chat.sent_user_id = user_profiles.user_id
        WHERE
            received_group_id = ?
    `
    const groupChat = await sql.handleSelect(sqlSelectGroupChat, [groupId])

    res.json(groupChat)
})

router.post("/getGroupChat", async (req, res) => {
    const groupId = req.body.groupId

    const sqlSelectGroupChat = `
        SELECT
            group_chat.*,
            user_profiles.user_name
        FROM
            group_chat
            INNER JOIN
                user_profiles ON
                group_chat.sent_user_id = user_profiles.user_id
        WHERE
            received_group_id = ?
    `
    const groupChat = await sql.handleSelect(sqlSelectGroupChat, [groupId])

    res.json(groupChat)
})

/**
 * 招待url生成
 * request: groupId
 * response: token
 */
router.post("/getInviteUrl", (req, res) => {
    const groupId = req.body.groupId

    const token = jwt.sign({ groupId: groupId }, config.jwt.secret, config.jwt.options)

    res.json(token)
})

/**
 * グループ退出
 * request: groupId
 * response: none
 */
router.post("/deleteJoinedGroup", async (req, res) => {
    const userId = get.userId(req)
    const groupId = req.body.groupId

    const sqlDeleteJoinedGroup = `
        DELETE
        FROM
            users_joined_group
        WHERE
            group_id = ? AND
            joined_user_id = ?
    `

    await sql.handleDelete(sqlDeleteJoinedGroup, [groupId, userId])
})

module.exports = router