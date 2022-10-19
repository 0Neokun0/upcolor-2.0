const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/getProfile", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectCompany = `
        SELECT *
        FROM company_profiles
        WHERE user_id = ?
    `
    const company = await sql.handleSelect(sqlSelectCompany, userId)

    res.json(company)
})

router.post("/list", async (req, res) => {
    const sqlSelectCompanies = `
        SELECT *
        FROM company_profiles
    `
    const sqlSelectOccupations = `
        SELECT occupation_id, occupation_name
        FROM occupations
    `
    const sqlSelectCourses = `
        SELECT course_id, course_name
        FROM courses
    `
    const sqlSelectPrefectures = `
        SELECT prefecture_id, prefecture_name
        FROM prefectures
    `

    const companies = await sql.handleSelect(sqlSelectCompanies, [])
    const occupations = await sql.handleSelect(sqlSelectOccupations, [])
    const courses = await sql.handleSelect(sqlSelectCourses, [])
    const prefectures = await sql.handleSelect(sqlSelectPrefectures, [])

    const list = [
        {
            company: companies,
            occupation: occupations,
            course: courses,
            prefecture: prefectures,
        }
    ]

    res.json(list[0])
})

router.post("/update", async (req, res) => {
    const userId = get.userId(req)

    // // 募集対象 1.専攻 2.業種 3.地域
    // const courseIds = req.courseIds
    // const occupationIds = req.occupationIds
    // const locationIds = req.locationIds

    // // 会社紹介
    // const introduction = req.introduction
    // // 事業紹介
    // const business = req.business
    // // 本社住所
    // const officeAddress = req.officeAddress

    // // 企業ホームページURL・就活サイトURL
    // const companyUrl = req.companyUrl
    // const jobSiteUrl = req.jobSiteUrl

    // 募集対象 1.専攻 2.業種 3.地域
    const courseIds = req.body.courseIds
    const occupationIds = ""
    const locationIds = ""

    // 会社紹介
    const introduction = ""
    // 事業紹介
    const business = ""
    // 本社住所
    const officeAddress = ""

    // 企業ホームページURL・就活サイトURL
    const companyUrl = ""
    const jobSiteUrl = ""

    console.log(courseIds)

    const sqlUpdateCompanyProfiles = `
        UPDATE
            company_profiles
        SET
            company_course_preference_id = ?,
            company_occupation_id = ?,
            company_location_id = ?,
            company_introduction = ?,
            company_url = ?
        WHERE
            user_id = ?
    `

    await sql.handleUpdate(sqlUpdateCompanyProfiles, [courseIds, occupationIds, locationIds, introduction, companyUrl, userId])

    // 専攻フロー（未定）

    res.json(true)
})

router.post("/courses", async (req, res) => {
    const selectCourses = `
        SELECT
            course_id,
            course_name
        FROM
            courses
    `
    const courses = await sql.handleSelect(selectCourses, [])

    res.json(courses)
})

router.post("/occupations", async (req, res) => {
    const selectOccupations = `
        SELECT
            occupation_id,
            occupation_name
        FROM
            occupations
    `
    const occupations = await sql.handleSelect(selectOccupations, [])

    res.json(occupations)
})

module.exports = router
