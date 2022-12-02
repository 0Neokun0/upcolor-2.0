const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/getFriend", async (req, res) => {
    try {
        const userId = get.userId(req)

        const sqlSelectFriend = `
            SELECT
                user_profiles.user_id AS id,
                user_profiles.user_name AS name
            FROM
            (
                SELECT
                    s1.user_id,
                    s1.follower_id
                FROM
                (
                    SELECT
                        fl.user_id AS user_id,
                        fl.follower_id AS follower_id
                    FROM
                        followers fl
                ) s1
                INNER JOIN
                (
                    SELECT
                        flw.follower_id AS user_id,
                        flw.user_id AS follower_id
                    FROM
                        followers flw
                ) s2
                ON
                    s1.user_id = s2.user_id AND
                    s1.follower_id = s2.follower_id
            ) follower_list
            INNER JOIN
                user_profiles ON
                follower_list.follower_id = user_profiles.user_id
            WHERE
                follower_list.user_id = ?
        `

        const friend = await sql.handleSelect(sqlSelectFriend, [userId])
        res.json(friend)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
})

router.post("/send", async (req, res) => {
    try {
        const userId = get.userId(req)
        const selectedUserId = req.body.selectedUserId
        const text = req.body.text

        const sqlInsertChat = `
            INSERT INTO private_chat(
                sent_user_id,
                received_user_id,
                sent_text
            )
            VALUES(
                ?,
                ?,
                ?
            )
        `

        await sql.handleInsert(sqlInsertChat, [userId, selectedUserId, text])

        res.status(200)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
})

router.post("/get", async (req, res) => {
    try {
        const userId = get.userId(req)
        const selectedUserId = req.body.selectedUserId

        const sqlSelectChat = `
            SELECT
                private_chat.chat_id AS id,
                CASE sender.user_id
                    WHEN ? THEN
                        1
                    ELSE
                        0
                   	END AS self,
                sender.user_name AS name,
                images.image_url AS icon,
                private_chat.created_at AS time,
                private_chat.sent_text AS text
            FROM
                private_chat
            INNER JOIN
                user_profiles AS sender ON
                private_chat.sent_user_id = sender.user_id
            INNER JOIN
                images ON
                sender.user_id = images.image_id AND
                images.image_type = 1
            WHERE
                (sent_user_id = ? AND received_user_id = ?) OR
                (sent_user_id = ? AND received_user_id = ?)
            ORDER BY
                private_chat.created_at
        `

        const chats = await sql.handleSelect(sqlSelectChat, [userId, userId, selectedUserId, selectedUserId, userId])

        res.json(chats)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
})

module.exports = router