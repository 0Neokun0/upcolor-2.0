const express = require("express")
const router = express.Router()

const jwt = require("jsonwebtoken")
const config = require("./config")
const get = require("./function/get")
const sql = require("./function/sql")

router.use((req, res, next) => {
    console.log("[account] Time: ", Date.now())
    next()
})

router.post("/signState", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectUserType = `
        SELECT
            user_types.type_name
        FROM
            user_profiles
            INNER JOIN
                user_types ON
                user_profiles.user_type_id = user_types.type_id
        WHERE
            user_profiles.user_id = ?
    `
    const user = await sql.handleSelect(sqlSelectUserType, [userId])

    if (userId) {
        res.json(user[0])
    } else {
        res.json(false)
    }
})

router.post("/signup", async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const userType = req.body.userType

    const sqlSelectUser = `
        SELECT
            user_id
        FROM
            user_profiles
        WHERE
            user_mail = ?
    `
    const userId = await sql.handleSelect(sqlSelectUser, [email])

    if (!userId.length) {
        const sqlInsertUser = `
            INSERT INTO user_profiles(
                user_name,
                user_mail,
                user_password,
                user_type_id
            )
            VALUES(
                ?,
                ?,
                ?,
                ?
            )
        `
        const user = await sql.handleInsert(sqlInsertUser, [name, email, password, userType])

        const userId = user.insertId
        const token = jwt.sign({userId: userId}, config.jwt.secret, config.jwt.options)

        const date = new Date()
        const expires = new Date(date.getTime() + 864000000)

        res.cookie("token", token, {
            expires: expires,
            path: "/",
            httpOnly: true,
        })
        
        if (userType === 1) {
            const course = req.body.course
            const sqlInsertStudent = `
                INSERT INTO student_profiles(
                    user_id,
                    student_course_id,
                    is_colaborating
                )
                VALUES(
                    ?,
                    ?,
                    0
                )
            `
            await sql.handleInsert(sqlInsertStudent, [userId, course])
            res.json({type_name: "STUDENT"})
        } else if (userType === 2) {
            const sqlInsertTeacher = `
                INSERT INTO teacher_profiles(
                    user_id
                )
                VALUES(
                    ?
                )
            `
            await sql.handleInsert(sqlInsertTeacher, [userId])
            res.json({type_name: "TEACEHR"})
        } else if (userType === 3) {
            const company = req.body.company
            const sqlInsertCompany = `
                INSERT INTO company_profiles(
                    user_id,
                    company_name
                )
                VALUES(
                    ?,
                    ?
                )
            `
            await sql.handleInsert(sqlInsertCompany, [userId, company])
            res.json({type_name: "COMPANY"})
        } else if (userType === 4) {
            const sqlInsertTeacher = `
                INSERT INTO teacher_profiles(
                    user_id
                )
                VALUES(
                    ?
                )
            `
            await sql.handleInsert(sqlInsertTeacher, [userId])
            res.json({type_name: "ADMIN"})
        }
    } else {
        res.json(false)
    }
})

router.post("/signin", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const sqlSelectUserId = `
        SELECT
            user_profiles.user_id,
            user_types.type_name
        FROM
            user_profiles
            INNER JOIN
                user_types ON
                user_profiles.user_type_id = user_types.type_id
        WHERE
            user_mail = ? AND
            user_password = ?
    `
    const user = await sql.handleSelect(sqlSelectUserId, [email, password])
    
    if (user.length) {
        const userId = user[0]["user_id"]
        
        const token = jwt.sign({userId: userId}, config.jwt.secret, config.jwt.options)
        const date = new Date()
        const expires = new Date(date.getTime() + 864000000)

        res.cookie("token", token, {
            expires: expires,
            path: "/",
            httpOnly: true,
        })

        res.json(user[0])
    } else {
        res.json(false)
    }
})

router.post("/signout", (req, res) => {
    res.cookie("token", "", {
        maxAge: -1,
        path: "/",
    })

    res.end()
})

// 自分
router.post("/getProfile", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectUser = `
        SELECT
            user_profiles.user_name,
            user_profiles.user_mail,
            user_profiles.user_introduction,
            student_profiles.student_year,
            student_profiles.student_programming_languages,
            student_profiles.student_tools_and_framework,
            student_profiles.student_country_language,
            student_profiles.student_qualifications,
            student_profiles.student_github,
            student_profiles.is_colaborating
        FROM
            user_profiles
        INNER JOIN
            student_profiles ON
            user_profiles.user_id = student_profiles.user_id
        WHERE
            user_profiles.user_id = ?
    `

    const profile = await sql.handleSelect(sqlSelectUser, [userId])

    res.json(profile)
})

// 他人
router.post("/getStudentProfile", async (req, res) => {
    const userId = req.body.userId

    const sqlSelectUser = `
        SELECT
            user_profiles.user_name,
            user_profiles.user_mail,
            user_profiles.user_introduction,
            student_profiles.student_year,
            student_profiles.student_programming_languages,
            student_profiles.student_tools_and_framework,
            student_profiles.student_country_language,
            student_profiles.student_qualifications,
            student_profiles.student_github,
            student_profiles.is_colaborating
        FROM
            user_profiles
        INNER JOIN
            student_profiles ON
            user_profiles.user_id = student_profiles.user_id
        WHERE
            user_profiles.user_id = ?
    `

    const profile = await sql.handleSelect(sqlSelectUser, [userId])

    res.json(profile)
})

// router.post("/studentProfileEdit", async (req, res) => {
//     const userId = get.userId(req)
//     const name = req.body.name
//     const email = req.body.email
//     const course = req.body.course
//     const year = req.body.studentYear
//     const selfIntroduction = req.body.studentSelfIntroduction
//     const programmingLanguage = req.body.programmingLanguage
//     const ToolsAndFramework = req.body.ToolsAndFrameword
//     const qualification = req.body.qualification
//     const github = req.body.githubLink
    
// })

module.exports = router