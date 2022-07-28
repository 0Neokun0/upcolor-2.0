const express = require("express")
const router = express.Router()

const sql = require("./function/sql")

router.use((req, res, next) => {
    console.log("[course] Time: ", Date.now())
    next()
})

router.post("/course", (req, res) => {
    const sqlSelectCourses = ```
        SELECT
            course_id,
            course_name
        FROM
            courses
    ```
    const courses = await sql.handleSelect(sqlSelectCourses, [])

    res.json(courses)
})

module.exports = router