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
            user_id,
            name,
            mail,
            image,
            course_id,
            course_name,
            year_id,
            year_name,
            introduction,
            qualification_ids,
            program_ids,
            tool_ids,
            language_ids,
            github
        FROM
            student_infomation
        WHERE
            user_id = ?
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

exports.teamId = async (userId) => {
    const sqlSelectTeam = `
        SELECT
            is_colaborating
        FROM
            student_profiles
        WHERE
            user_id = ?
    `

    const teamId = await sql.handleSelect(sqlSelectTeam, [userId])

    return teamId[0]["is_colaborating"]
}

exports.company = async (companyId) => {
    const sqlSelectCompany = `
        SELECT
            *
        FROM
            company_infomation
        WHERE
            company_id = ?
    `
    const company = await sql.handleSelect(sqlSelectCompany, [companyId])

    return company[0]
}