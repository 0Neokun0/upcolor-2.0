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

router.post("/signState", (req, res) => {
    const userId = get.userId(req)

    if (userId) {
        res.json(true)
    } else {
        res.json(false)
    }
})

router.post("/signup", async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const course = req.body.course

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
                1
            )
        `
        const user = await sql.handleInsert(sqlInsertUser, [name, email, password])

        const userId = user.insertId

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

        const token = jwt.sign({userId: userId}, config.jwt.secret, config.jwt.options)

        const date = new Date()
        const expires = new Date(date.getTime() + 864000000)

        res.cookie("token", token, {
            expires: expires,
            path: "/",
            httpOnly: true,
        })

        res.json(true)
    } else {
        res.json(false)
    }
})

router.post("/teacherSignup", async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

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
                2
            )
        `
        const user = await sql.handleInsert(sqlInsertUser, [name, email, password])

        const userId = user.insertId

        const sqlInsertTeacher = `
            INSERT INTO teacher_profiles(
                user_id
            )
            VALUES(
                ?
            )
        `
        await sql.handleInsert(sqlInsertTeacher, [userId])

        const token = sign({userId: userId}, config.jwt.secret, config.jwt.options)

        const date = new Date()
        const expires = new Date(date.getTime() + 864000000)

        res.cookie("token", token, {
            expires: expires,
            path: "/",
            httpOnly: true,
        })

        res.json(true)
    } else {
        res.json(false)
    }
})

router.post("/companySignup", async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const company = req.body.company

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
                3
            )
        `
        const user = await sql.handleInsert(sqlInsertUser, [name, email, password])

        const userId = user.insertId

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

        const token = jwt.sign({userId: userId}, config.jwt.secret, config.jwt.options)

        const date = new Date()
        const expires = new Date(date.getTime() + 864000000)

        res.cookie("token", token, {
            expires: expires,
            path: "/",
            httpOnly: true,
        })

        res.json(true)
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
        const token = jwt.sign({userId: user[0]["user_id"]}, config.jwt.secret, config.jwt.options)

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

router.post("/studentProfileEdit", async (req, res) => {
    const userId = get.userId(req)
    const name = req.body.name
    const email = req.body.email
    const course = req.body.course
    const year = req.body.studentYear
    const selfIntroduction = req.body.studentSelfIntroduction
    const programmingLanguage = req.body.programmingLanguage
    const ToolsAndFramework = req.body.ToolsAndFrameword
    const qualification = req.body.qualification
    const github = req.body.githubLink
    
})

module.exports = router