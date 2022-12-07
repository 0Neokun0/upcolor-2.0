const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/createClassNewsRoom", async (req, res) => {
    try {
        const userId = get.userId(req)
        const name = req.body.name
        const password = req.body.password

        const sqlInsertClass = `
            INSERT INTO classes_list(
                created_user_id,
                class_name,
                class_password
            )
            VALUES(
                ?,
                ?,
                ?
            )
        `
        const insert = await sql.handleInsert(sqlInsertClass, [userId, name, password])

        const sqlInsertJoinedClass = `
            INSERT INTO users_joined_class(
                class_id,
                joined_user_id
            )
            VALUES(
                ?,
                ?
            )
        `
        await sql.handleInsert(sqlInsertJoinedClass, [insert["insertId"], userId])

        res.json(true)
    } catch (error) {
        console.log(error)
        res.json(false)
    }
})

// 返却値... 1: 参加, 2: 参加済み, 3: room無し
router.post("/joinClassNews", async (req, res) => {
    try {
        const id = req.body.id
        const password = req.body.password

        const sqlSelectClass = `
            SELECT
                *
            FROM
                classes_list
            WHERE
                class_id = ? AND
                class_password = ?
        `
        const classRoom = await sql.handleSelect(sqlSelectClass, [id, password])

        if (!!classRoom) {
            const userId = get.userId(req)

            const sqlSelectJoin = `
                SELECT
                    *
                FROM
                    users_joined_class
                WHERE
                    class_id = ? AND
                    joined_user_id = ?
            `
            const join = await sql.handleSelect(sqlSelectJoin, [id, userId])

            if (!join) {
                const sqlJoinClass = `
                    INSERT INTO users_joined_class(
                        class_id,
                        joined_user_id
                    )
                    VALUES(
                        ?,
                        ?
                    )
                `
                await sql.handleInsert(sqlJoinClass, [id, userId])

                res.json(1)
            } else {
                res.json(2)
            }
        } else {
            res.json(3)
        }
    } catch (error) {
        console.log(error)
        res.status(404)
    }
})

router.post("/getJoinedClass", async (req, res) => {
    try {
        const userId = get.userId(req)

        const sqlSelectJoinedClass = `
            SELECT
                classes_list.class_id,
                classes_list.class_name,
                user_profiles.user_name
            FROM
                users_joined_class
            INNER JOIN
                classes_list ON
                classes_list.class_id = users_joined_class.class_id
            INNER JOIN
                user_profiles ON
                user_profiles.user_id = classes_list.created_user_id
            WHERE
                joined_user_id = ?
        `
        const joinedClass = await sql.handleSelect(sqlSelectJoinedClass, [userId])

        res.json(joinedClass)
    } catch (error) {
        console.log(error)
        res.json(false)
    }
})

router.post("/enterClassRoom", async (req, res) => {
    try {
        const classId = req.body.classId

        const sqlSelectClass = `
            SELECT
                classes_list.class_name,
                classes_list.class_password,
                user_profiles.user_name,
                images.image_url
            FROM
                classes_list
            INNER JOIN
                user_profiles ON
                user_profiles.user_id = classes_list.created_user_id
            INNER JOIN
                images ON
                images.image_id = classes_list.created_user_id
            WHERE
                image_type = 1 AND
                class_id = ?
        `
        const enterClass = await sql.handleSelect(sqlSelectClass, [classId])

        res.json(enterClass[0])
    } catch (error) {
        console.log(error)
        res.json(false)
    }
})

router.post("/addClassNews", async (req, res) => {
    try {
        const userId = get.userId(req)
        const classId = req.body.classId
        const text = req.body.text

        const sqlInsertNews = `
            INSERT INTO class_chat(
                sent_user_id,
                received_class_id,
                sent_text,
                class_file_url
            )
            VALUES(
                ?,
                ?,
                ?,
                NULL
            )
        `
        await sql.handleInsert(sqlInsertNews, [userId, classId, text])

        res.json(true)
    } catch (error) {
        console.log(error)
        res.json(false)
    }
})

router.post("/getClassNews", async (req, res) => {
    try {
        const classId = req.body.classId

        const sqlSelectNews = `
            SELECT
                class_chat.chat_id,
                user_profiles.user_id,
                user_profiles.user_name,
                class_chat.sent_text,
                class_chat.class_file_url,
                images.image_url,
                class_chat.created_at
            FROM
                class_chat
            INNER JOIN
                user_profiles ON
                user_profiles.user_id = class_chat.sent_user_id
            INNER JOIN
                images ON
                images.image_id = class_chat.sent_user_id
            WHERE
                received_class_id = ?
            ORDER BY class_chat.chat_id DESC
        `
        const news = await sql.handleSelect(sqlSelectNews, [classId])

        res.json(news)
    } catch (error) {
        console.log(error)
        res.json(false)
    }
})

module.exports = router