const express = require("express")
const router = express.Router()

const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/icon/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + ".png")
    }
})
const upload = multer({ storage: storage })

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

        // 初期アイコンを設定
        const sqlInsertIcon = `
            INSERT INTO images(
                image_url,
                image_id,
                image_type
            )
            VALUES(
                "userIcon.png",
                ?,
                1
            )
        `
        await sql.handleInsert(sqlInsertIcon, [userId])
        //

        const token = jwt.sign({ userId: userId }, config.jwt.secret, config.jwt.options)

        const date = new Date()
        const expires = new Date(date.getTime() + 864000000)

        res.cookie("token", token, {
            expires: expires,
            path: "/",
        })

        if (userType === 1) {
            const course = req.body.course
            const year = req.body.year

            const sqlInsertStudent = `
                INSERT INTO student_profiles(
                    user_id,
                    student_course_id,
                    student_year,
                    is_colaborating
                )
                VALUES(
                    ?,
                    ?,
                    ?,
                    0
                )
            `
            await sql.handleInsert(sqlInsertStudent, [userId, course, year])
            res.json({ type_name: "STUDENT" })
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
            res.json({ type_name: "TEACEHR" })
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
            res.json({ type_name: "COMPANY" })
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
            res.json({ type_name: "ADMIN" })
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

        const token = jwt.sign({ userId: userId }, config.jwt.secret, config.jwt.options)
        const date = new Date()
        const expires = new Date(date.getTime() + 864000000)

        res.cookie("token", token, {
            expires: expires,
            path: "/",
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

// 自分 *生徒専用
router.post("/getProfile", async (req, res) => {
    try {
        const userId = get.userId(req)
        const profile = await get.user(userId)
        const qualifications = await get.list("qualification")
        const programs = await get.list("program")
        const tools = await get.list("tool")
        const languages = await get.list("language")

        profile[0]["course_name"] = profile[0]["course_name"].split("/").join("\n")

        profile[0]["qualification_names"] = ["未設定"]
        if (profile[0]["qualification_ids"]) {
            profile[0]["qualification_names"] = profile[0]["qualification_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : qualifications[Number(id) - 1]["qualification_name"]).join("\n")
        }

        profile[0]["program_names"] = ["未設定"]
        if (profile[0]["program_ids"]) {
            profile[0]["program_names"] = profile[0]["program_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : programs[Number(id) - 1]["program_name"]).join("\n")
        }

        profile[0]["tool_names"] = ["未設定"]
        if (profile[0]["tool_ids"]) {
            profile[0]["tool_names"] = profile[0]["tool_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : tools[Number(id) - 1]["tool_name"]).join("\n")
        }

        profile[0]["language_names"] = ["未設定"]
        if (profile[0]["language_ids"]) {
            profile[0]["language_names"] = profile[0]["language_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : languages[Number(id) - 1]["language_name"]).join("\n")
        }

        res.json(profile[0])
    } catch (error) {
        res.json(false)
        console.log(error)
    }

})

// 他人
router.post("/getStudentProfile", async (req, res) => {
    const userId = req.body.userId

    try {
        const profile = await get.user(userId)
        const qualifications = await get.list("qualification")
        const programs = await get.list("program")
        const tools = await get.list("tool")
        const languages = await get.list("language")

        profile[0]["course_name"] = profile[0]["course_name"].split("/").join("\n")

        profile[0]["qualification_names"] = ["未設定"]
        if (profile[0]["qualification_ids"]) {
            profile[0]["qualification_names"] = profile[0]["qualification_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : qualifications[Number(id) - 1]["qualification_name"]).join("\n")
        }

        profile[0]["program_names"] = ["未設定"]
        if (profile[0]["program_ids"]) {
            profile[0]["program_names"] = profile[0]["program_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : programs[Number(id) - 1]["program_name"]).join("\n")
        }

        profile[0]["tool_names"] = ["未設定"]
        if (profile[0]["tool_ids"]) {
            profile[0]["tool_names"] = profile[0]["tool_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : tools[Number(id) - 1]["tool_name"]).join("\n")
        }

        profile[0]["language_names"] = ["未設定"]
        if (profile[0]["language_ids"]) {
            profile[0]["language_names"] = profile[0]["language_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : languages[Number(id) - 1]["language_name"]).join("\n")
        }

        res.json(profile[0])
    } catch (error) {
        console.log(error)
        res.json(false)
    }
})

router.post("/editProfile", async (req, res) => {
    const userId = get.userId(req)
    const profile = await get.user(userId)
    const courses = await get.list("course")
    const years = await get.list("year")
    const qualifications = await get.list("qualification")
    const programs = await get.list("program")
    const tools = await get.list("tool")
    const languages = await get.list("language")

    res.json({
        profile: profile[0],
        courses: courses,
        years: years,
        qualifications: qualifications,
        programs: programs,
        tools: tools,
        languages: languages
    })
})

router.post("/updateProfile", async (req, res) => {
    const userId = get.userId(req)

    const name = req.body.name
    const introduction = req.body.introduction

    const course = req.body.course
    const year = req.body.year
    const qualifications = req.body.qualifications
    const programming_languages = req.body.programming_languages
    const tools_and_framework = req.body.tools_and_framework
    const country_language = req.body.country_language
    const github = req.body.github

    const sqlUpdateUserProfile = `
        UPDATE
            user_profiles
        SET
            user_name = ?,
            user_introduction = ?
        WHERE
            user_id = ?
    `
    const sqlUpdateStudentProfile = `
        UPDATE
            student_profiles
        SET
            student_course_id = ?,
            student_year = ?,
            student_qualifications = ?,
            student_programming_languages = ?,
            student_tools_and_framework = ?,
            student_country_language = ?,
            student_github = ?
        WHERE
            user_id = ?
    `

    await sql.handleUpdate(sqlUpdateUserProfile, [name, introduction, userId])
    await sql.handleUpdate(sqlUpdateStudentProfile, [course, year, qualifications, programming_languages, tools_and_framework, country_language, github, userId])

    res.json(true)
})

router.post("/updateUserIcon", upload.single("icon"), async (req, res) => {
    const userId = get.userId(req)
    const sqlUpdateIcon = `
        UPDATE
            images
        SET
            image_url = ?
        WHERE
            image_type = 1 AND
            image_id = ?
    `
    if (req.file) {
        await sql.handleUpdate(sqlUpdateIcon, [req.file.filename, userId])
    } else {
        await sql.handleUpdate(sqlUpdateIcon, ["userIcon.png", userId])
    }
})

router.post("/follow", async (req, res) => {
    const userId = get.userId(req)
    const target = req.body.target

    const sqlSelectFollowState = `
        SELECT
            COUNT(*) AS state
        FROM
            followers
        WHERE
            user_id = ? AND
            follower_id = ?
    `
    const state = await sql.handleSelect(sqlSelectFollowState, [target, userId])

    if (state[0]["state"]) {
        const sqlDeleteFollow = `
        DELETE FROM followers
        WHERE
        user_id = ? AND
        follower_id = ?
        `

        await sql.handleDelete(sqlDeleteFollow, [target, userId])
    } else {
        const sqlInsertFollow = `
            INSERT followers(
                user_id,
                follower_id
            )
            VALUES(
                ?,
                ?
            )
        `

        await sql.handleInsert(sqlInsertFollow, [target, userId])
    }

    res.json(true)
})

router.post("/getFollow", async (req, res) => {
    const userId = get.userId(req)
    const target = req.body.target

    const sqlSelectFollowState = `
        SELECT
            COUNT(*) AS state
        FROM
            followers
        WHERE
            user_id = ? AND
            follower_id = ?
    `

    const state = await sql.handleSelect(sqlSelectFollowState, [target, userId])
    res.json(state[0]["state"])
})

router.post("/getFollowList", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectFollowList = `
        SELECT
            user_profiles.user_id,
            user_profiles.user_name
        FROM
            followers
        INNER JOIN
            user_profiles ON
            user_profiles.user_id = followers.user_id
        WHERE
            follower_id = ?
    `
    const followList = await sql.handleSelect(sqlSelectFollowList, [userId])

    const sqlSelectFollowerList = `
        SELECT
            user_profiles.user_id,
            user_profiles.user_name
        FROM
            followers
        INNER JOIN
            user_profiles ON
            user_profiles.user_id = followers.follower_id
        WHERE
            followers.user_id = ?
    `
    const followerList = await sql.handleSelect(sqlSelectFollowerList, [userId])

    const sqlSelectFriendList = `
    SELECT
        user_profiles.user_id,
        user_profiles.user_name
    FROM
    (
        SELECT
            s1.user_id,
            s1.follower_id
        FROM
        (
            SELECT
                fl.user_id AS user_id,
                fl.follower_id AS follower_id
            FROM
                followers fl
        ) s1
        INNER JOIN
        (
            SELECT
                flw.follower_id AS user_id,
                flw.user_id AS follower_id
            FROM
                followers flw
        ) s2
        ON
            s1.user_id = s2.user_id AND
            s1.follower_id = s2.follower_id
    ) follower_list
    INNER JOIN
        user_profiles ON
        follower_list.follower_id = user_profiles.user_id
    WHERE
        follower_list.user_id = ?
    `

    const friendList = await sql.handleSelect(sqlSelectFriendList, [userId])

    res.json({
        followList: followList,
        followerList: followerList,
        friendList: friendList,
    })
})

router.post("/selfCheck", async (req, res) => {
    const userId = get.userId(req)
    const pageUserId = req.body.userId

    if (userId == pageUserId) {
        res.json(false)
    } else {
        res.json(true)
    }
})

module.exports = router