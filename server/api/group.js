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

router.post("/getGroup", (req, res) => {
    const inviteToken = req.body.inviteToken

    try {
        jwt.verify(inviteToken, config.jwt.secret, (err, res) => {
            if (err) throw err

            const groupId = res["groupId"]

            const sqlSelectGroup = "SELECT group_id, group_name FROM group_list WHERE group_id = ?"
            const groupList = await sql.handleSelect(sqlSelectGroup, [groupId])

            if (groupList.length) {
                res.json(groupList)
            } else {
                res.json(false)
            } 
        })
    } catch (err) {
        res.json(false)
    }
})

router.post("/addGroup", (req, res) => {
    const userId = get.userId(req)
    const name = req.body.name

    const sqlInsertGroup = "INSERT INTO groups_list(created_user_id, group_name) VALUES(?, ?)"
    const group = await sql.handleInsert(sqlInsertGroup, [userId, name])

    const groupId = group["insertId"]

    const sqlInsertJoinedGroup = "INSERT INTO users_joined_group(group_id, joined_user_id) VALUES(?, ?)"
    await sql.handleInsert(sqlInsertJoinedGroup, [groupId, userId])
})

router.post("/joinGroup", (req, res) => {
    const userId = get.userId(req)
    const groupId = req.body.group_id

    const sqlSelectJoinedGroup = "SELECT group_id FROM users_joined_group WHERE group_id = ? AND joined_user_id = ?"
    const joinedGroup = await sql.handleSelect(sqlSelectJoinedGroup, [groupId, userId])

    if (!joinedGroup.length) {
        const sqlInsertJoinGroup = "INSERT INTO users_joined_group(group_id, joined_user_id) VALUES(?, ?)"
        await sql.handleInsert(sqlInsertJoinGroup, [groupId, userId])
    }
})

router.post("/getJoinedGroupList", (req, res) => {
    const userId = get.userId(req)

    const sqlSelectJoinGroup = "SELECT groups_list.group_id, groups_list.group_name FROM users_joined_group INNER JOIN groups_list ON users_joined_group.group_id = groups_list.group_id WHERE users_joined_group.joined_user_id = ?"
    const groupsList = await sql.handleSelect(sqlSelectJoinGroup)

    res.json(groupsList)
})

router.post("/sendChat", (req, res) => {
    const userId = get.userId(req)
    const groupId = req.body.group_id
    const text = req.body.text

    const sqlInsertChat = "INSERT INTO group_chat(sent_user_id, received_group_id, sent_text) VALUES(?, ?, ?)"
    await sql.handleInsert(sqlInsertChat, [userId, groupId, text])

    const sqlSelectGroupChat = "SELECT group_chat.*, user_profiles.user_name FROM group_chat INNER JOIN user_profiles ON group_chat.sent_user_id = user_profiles.user_id WHERE received_group_id = ?"
    const groupChat = await sql.handleSelect(sqlSelectGroupChat, [groupId])

    res.json(groupChat)
})

router.post("/getGroupChat", (req, res) => {
    const groupId = req.body.group_id

    const sqlSelectGroupChat = "SELECT group_chat.*, user_profiles.user_name FROM group_chat INNER JOIN user_profiles ON group_chat.sent_user_id = user_profiles.user_id WHERE received_group_id = ?"
    const groupChat = await sql.handleSelect(sqlSelectGroupChat, [groupId])

    res.json(groupChat)
})

router.post("/getInviteUrl", (req, res) => {
    const groupId = req.body.group_id

    const token = jwt.sign({groupId: groupId}, config.jwt.secret, config.jwt.options)

    res.json(token)
})

module.exports = router