const cookie = require("cookie")
const jwt = require("jsonwebtoken")
const config = require("../config")
const sql = require("./sql")

exports.userId = (req) => {
    const cookies = cookie.parse(req.headers.cookie || "")
    const token = cookies["token"]

    let userId

    try {
        jwt.verify(token, config.jwt.secret, (err, res) => {
            userId = res["userId"]
        })
    } catch (err) {
        userId = false
    }

    return userId
}

exports.name = (token) => {
    let name

    try {
        jwt.verify(token, config.jwt.secret, (err, res) => {
            name = res["name"]
        })
    } catch (err) {
        name = false
    }

    return name
}

exports.password = (token, password) => {
    let NAOKO

    try {
        jwt.verify(token, password, (err, res) => {
            NAOKO = res["team"]
        })
    } catch (err) {
        NAOKO = false
    }

    return NAOKO
}

exports.user = async (userId) => {
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
            student_profiles.is_colaborating,
            courses.course_id,
            courses.course_name
        FROM
            user_profiles
        INNER JOIN
            student_profiles ON
            user_profiles.user_id = student_profiles.user_id
        INNER JOIN
            courses ON
            student_profiles.student_course_id = courses.course_id
        WHERE
            user_profiles.user_id = ?
    `

    const profile = await sql.handleSelect(sqlSelectUser, [userId])

    return profile
}

exports.list = async (type) => {
    const sqlSelectType = `
        SELECT
            ` + type + `_id,
            ` + type + `_name
        FROM
            ` + type + `s
    `

    const types = await sql.handleSelect(sqlSelectType, [])

    return types
}
