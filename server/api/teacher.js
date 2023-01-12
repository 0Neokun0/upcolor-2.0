const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/editTeacher", async (req, res) => {
    const userId = get.userId(req)
    const teacher = await get.user(userId)
    const courses = await get.list("course")
    const qualifications = await get.list("qualification")
    const programs = await get.list("program")
    const tools = await get.list("tool")
    const languages = await get.list("language")

    res.json({
        teacher: teacher[0],
        courses: courses,
        qualifications: qualifications,
        programs: programs,
        tools: tools,
        languages: languages
    })
})

router.post("/getTeacher", async (req, res) => {
    const userId = get.userId(req)
    const courses = await get.list("course")
    const qualifications = await get.list("qualification")
    const programs = await get.list("program")
    const tools = await get.list("tool")
    const languages = await get.list("language")

    teacher[0]["course_name"] = teacher[0]["course_name"].split("/").join("\n")

        teacher[0]["qualification_names"] = ["未設定"]
        if (teacher[0]["qualification_ids"]) {
            teacher[0]["qualification_names"] = teacher[0]["qualification_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : qualifications[Number(id) - 1]["qualification_name"]).join("\n")
        }

        teacher[0]["program_names"] = ["未設定"]
        if (teacher[0]["program_ids"]) {
            teacher[0]["program_names"] = teacher[0]["program_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : programs[Number(id) - 1]["program_name"]).join("\n")
        }

        teacher[0]["tool_names"] = ["未設定"]
        if (teacher[0]["tool_ids"]) {
            teacher[0]["tool_names"] = teacher[0]["tool_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : tools[Number(id) - 1]["tool_name"]).join("\n")
        }

        teacher[0]["language_names"] = ["未設定"]
        if (teacher[0]["language_ids"]) {
            teacher[0]["language_names"] = teacher[0]["language_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : languages[Number(id) - 1]["language_name"]).join("\n")
        }

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

    const teacher = await sql.handleSelect(sqlSelectUser, [userId])

    res.json(teacher)
})


router.post("/updateTeacher", async (req, res) => {
    const userId = get.userId(req)
    const name = req.body.name
    const introduction = req.body.introduction
    const course = req.body.course
    const qualifications = req.body.qualifications
    const programming_languages = req.body.programming_languages
    const tools_and_framework = req.body.tools_and_framework
    const country_language = req.body.country_language

    const sqlUpdateUserTeacher = `
        UPDATE
            user_profiles
        SET
            user_name = ?,
            user_introduction = ?

        WHERE
            user_id = ?
    `
    const sqlUpdateTeacherProfile = `
        UPDATE
            teacher_profiles
        SET
            teacher_course_id = ?,
            teacher_qualifications = ?,
            teacher_programming_languages = ?,
            teacher_tools_and_framework = ?,
            teacher_country_language = ?,
        WHERE
            user_id = ?
    `

    await sql.handleUpdate(sqlUpdateUserTeacher, [name, introduction, userId])
    await sql.handleUpdate(sqlUpdateTeacherProfile, [course, qualifications, programming_languages, tools_and_framework, country_language, userId])

    res.json(true)
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