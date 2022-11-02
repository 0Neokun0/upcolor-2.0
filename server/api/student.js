const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/list", async (req, res) => {
    const sqlSelectStudents = `
        SELECT *
        FROM student_profiles
        INNER JOIN user_profiles
        ON student_profiles.user_id = user_profiles.user_id
    `
    const students = await sql.handleSelect(sqlSelectStudents, [])

    const courses = await get.list("course")
    const years = await get.list("year")
    const qualifications = await get.list("qualification")
    const programs = await get.list("program")
    const tools = await get.list("tool")
    const languages = await get.list("language")

    res.json({
        students: students,
        search: {
            courses: courses,
            years: years,
            qualifications: qualifications,
            programs: programs,
            tools: tools,
            languages: languages,
        }
    })
})

module.exports = router