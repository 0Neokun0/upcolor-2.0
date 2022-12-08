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

    const sqlSelectCompanyNews = `
        SELECT
            user_profiles.user_name,
            company_news.company_news_id,
            company_news.company_news_title,
            company_news.company_news_text,
            company_news.created_at
        FROM
            company_news
        INNER JOIN
            user_profiles ON
            company_news.company_news_user_id = user_profiles.user_id
        WHERE
            company_news.target_course_id LIKE "%?%"
    `
    const companyNews = await sql.handleSelect(sqlSelectCompanyNews, [studentCourse[0]["student_course_id"]])

    res.json(companyNews)
})

module.exports = router