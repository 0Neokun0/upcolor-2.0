const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/getStudentNews", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectStudentCourse = `
        SELECT
            student_course_id
        FROM
            student_profiles
        WHERE
            user_id = ?
    `
    const studentCourse = await sql.handleSelect(sqlSelectStudentCourse, [userId])

    const sqlSelectNews = `
        SELECT
            user_profiles.user_name,
            news.news_id,
            news.news_title,
            news.news_text,
            news.created_at
        FROM
            news
        INNER JOIN
            user_profiles ON
            news.news_user_id = user_profiles.user_id
        WHERE
            news.target_course_id LIKE "%?%"
    `
    const news = await sql.handleSelect(sqlSelectNews, [studentCourse[0]["student_course_id"]])

    res.json(news)
})

module.exports = router