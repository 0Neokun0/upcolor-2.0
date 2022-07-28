const express = require("express")
const router = express.Router()
const get = require("./function/get")
const sql = require("./function/sql")

router.post("/addLectures", async (req, res) => {
    let timeTable = req.body["timeTable"]
    let courseId = true

    const sqlSelectCourseId = `
        SELECT
            course_id
        FROM
            courses
        WHERE
            course_name = ?
    `
    for (let i = 0; i < timeTable.length && courseId; i ++) {
        courseId = await sql.handleSelect(sqlSelectCourseId, timeTable[i][5])

        timeTable[i][5] = courseId["course_id"]
    }

    if (courseId) {
        const sqlInsertTimeTable = `
            INSERT INTO lectures_list(
                lecture_name,
                lecture_room,
                lecture_teacher,
                lecture_day,
                lecture_period,
                target_course_id,
                target_student_year
            )
            VALUES(
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            )
        `
        await Promise.all(timeTable.map(async (cell) => {
            await sql.handleInsert(sqlInsertTimeTable, cell)
        }))

        res.json(true)
    } else {
        res.json(403)
    }
})

router.post("/getLecturesList", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectUser = `
        SELECT
            student_course_id,
            student_year
        FROM
            student_profiles
        WHERE
            user_id = ?
    `
    const user = await sql.handleSelect(sqlSelectUser, userId)

    const course = user["student_course_id"]
    const year = "%" + user["student_year"] + "%"

    const sqlSelectLectures = `
        SELECT
            lecture_name,
            lecture_room,
            lecture_teacher,
            lecture_day,
            lecture_period,
            target_course_id,
            target_student_year
        FROM
            lectures_list
        WHERE
            course_id = ? AND
            student_year LIKE ?
    `
    const lecturesList = await sql.handleSelect(sqlSelectLectures, [course, year])

    if (lecturesList) {
        res.json(lecturesList)
    } else {
        res.json(403)
    }
})

router.post("/addTimeTable", async (req, res) => {
    const timeTable = req.body
    const userId = get.userId(req)

    const sqlSelectTimeTable = `
        SELECT
            lecture_id
        FROM
            student_time_table
        WHERE
            student_id = ?
    `
    const lecturesId = await sql.handleSelect(sqlSelectTimeTable, userId)

    if (!lecturesId.length) {
        const sqlInsertTimeTable = `
            INSERT INTO student_time_table(
                student_id,
                lecture_id
            )
            VALUES(
                ?,
                ?
            )
        `
        await Promise.all(timeTable.map(async (lectureId) => {
            if (lectureId) {
                await sql.handleInsert(sqlInsertTimeTable, [userId, lectureId])
            }
        }))

        res.json(true)
    } else {
        res.json(false)
    }
})

router.post("/overWriteTimeTable", async (req, res) => {
    const timeTable = req.body
    const userId = get.userId(req)

    const sqlDeleteTimeTable = `
        DELETE
        FROM
            student_time_table
        WHERE
            student_id = ?
    `
    await sql.handleDelete(sqlDeleteTimeTable, userId)

    const sqlInsertTimeTable = `
        INSERT INTO student_time_table(
            student_id,
            lecture_id
        )
        VALUES(
            ?,
            ?
        )
    `
    await Promise.all(timeTable.map(async (lectureId) => {
        if (lectureId) {
            await sql.handleInsert(sqlInsertTimeTable, [userId, lectureId])
        }
    }))

    res.json(true)
})

router.post("/getTimeTable", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectLecturesContent = `
        SELECT
            lectures_list.lecture_name,
            lectures_list.lecture_room,
            lectures_list.lecture_teacher,
            lectures_list.lecture_day,
            lectures_list.lecture_period,
            lectures_list.target_course_id,
            lectures_list.target_student_year
        FROM
            student_time_table
            INNER JOIN
                lectures_list ON
                student_time_table.lecture_id = lectures_list.lecture_id
        WHERE
            student_time_table.student_id = ?
    `
    const lecturesContent = await sql.handleSelect(sqlSelectLecturesContent, userId)

    if (lecturesContent.length) {
        req.json(lecturesContent)
    } else {
        res.json(404)
    }
})

module.exports = router