const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/getProfile", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectUser = `
        SELECT
            user_profiles.user_name,
            user_profiles.user_mail,
            user_profiles.user_introduction
        FROM
            user_profiles
        WHERE
            user_profiles.user_id = ?
    `

    const profile = await sql.handleSelect(sqlSelectUser, [userId])

    res.json(profile)
})

router.post("/addNews", async (req, res) => {
    const userId = get.userId(req)
    const title = req.body.title
    const text = req.body.text
    const target = req.body.target.join(",")

    const sqlInsertNews = `
        INSERT INTO news(
            news_user_id,
            news_title,
            news_text,
            target_course_id
        )
        VALUES(
            ?,
            ?,
            ?,
            ?
        )
    `

    await sql.handleInsert(sqlInsertNews, [userId, title, text, target])
})

// 自分が投稿したニュースを送信
router.post("/getMyNews", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectMyNews = `
        SELECT
            user_profiles.user_name,
            news.news_id,
            news.news_user_id,
            news.news_text,
            news.news_title,
            news.created_at
        FROM
            news
        INNER JOIN
            user_profiles ON
            news.news_user_id = user_profiles.user_id
        WHERE
            news.news_user_id = ?
        ORDER BY news.created_at DESC
    `

    const news = await sql.handleSelect(sqlSelectMyNews, [userId])

    res.json(news)
})

router.post("/getStudentList", async (req, res) => {
    const sqlSelectStudentList = `
        SELECT
            student_id,
            name,
            mail,
            image,
            course_name,
            year_name
        FROM
            student_infomation
        ORDER BY
            year_id,
            course_id
    `
    const studentList = await sql.handleSelect(sqlSelectStudentList, [])

    res.json(studentList)
})

module.exports = router