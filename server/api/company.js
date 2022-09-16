const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/recruitment", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectCompany = `
        SELECT *
        FROM company_profiles
        WHERE user_id = ?
    `
    const company = await sql.handleSelect(sqlSelectCompany, [userId])

    res.json(company[0])
})

router.post("/list" , async (req, res) => {
    const sqlSelectCompany = `
        SELECT *
        FROM company_profiles
    `
    const sqlSelectOccupation = `
        SELECT occupation_id, occupation_name
        FROM occupations
    `
    const sqlSelectCourse = `
        SELECT course_id, course_name
        FROM courses
    `
    const sqlSelectPrefecture = `
        SELECT prefecture_id, prefecture_name
        FROM prefectures
    `
    const sqlSelectRegion = `
        SELECT region_id, region_name
        FROM regions
    `

    const companies = await sql.handleSelect(sqlSelectCompany, [])
    const occupations = await sql.handleSelect(sqlSelectOccupation, [])
    const courses = await sql.handleSelect(sqlSelectCourse, [])
    const prefectures = await sql.handleSelect(sqlSelectPrefecture, [])
    const regions = await sql.handleSelect(sqlSelectRegion, [])

    const list = [
        {
            company: companies,
            occupation: occupations,
            course: courses,
            prefecture: prefectures,
            region: regions,
        }
    ]

    res.json(list[0])
})

module.exports = router