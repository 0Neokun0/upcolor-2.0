const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/editProfile", async (req, res) => {
    const userId = get.userId(req)

    const sqlSelectCompany = `
        SELECT *
        FROM company_profiles
        WHERE user_id = ?
    `
    const company = await sql.handleSelect(sqlSelectCompany, [userId])

    const sqlSelectCourses = `
        SELECT
            course_id,
            course_name
        FROM
            courses
    `
    const courses = await sql.handleSelect(sqlSelectCourses, [])

    const sqlSelectOccupations = `
        SELECT
            occupation_id,
            occupation_name
        FROM
            occupations
    `
    const occupations = await sql.handleSelect(sqlSelectOccupations, [])

    const selectLocations = `
        SELECT
            prefecture_id,
            prefecture_name
        FROM
            prefectures
    `

    const locations = await sql.handleSelect(selectLocations, [])

    res.json([{
        company : company[0],
        courses : courses,
        occupations : occupations,
        locations : locations,
    }][0])
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

    // 募集対象 1.専攻 2.業種 3.地域
    const courseIds = req.body.courseIds
    const occupationIds = req.body.occupationIds
    const locationIds = req.body.locationIds

    // 会社紹介
    const introduction = req.body.introduction
    // 事業紹介
    const business = req.body.business
    // 代表メッセージ
    const ceoMessage = req.body.ceoMessage
    // 本社住所
    const officeAddress = req.body.officeAddress

    // 企業ホームページURL・就活サイトURL
    const homePageUrl = req.body.homePageUrl
    const jobSiteUrl = req.body.jobSiteUrl

    try {
        const sqlUpdateCompanyProfiles = `
            UPDATE
                company_profiles
            SET
                company_course_id = ?,
                company_occupation_id = ?,
                company_location_id = ?,
                company_introduction = ?,
                company_business = ?,
                company_ceo_message = ?,
                company_address = ?,
                company_homepage_url = ?,
                company_jobsite_url = ?
            WHERE
                user_id = ?
        `

        await sql.handleUpdate(sqlUpdateCompanyProfiles, [courseIds, occupationIds, locationIds, introduction, business, ceoMessage, officeAddress, homePageUrl, jobSiteUrl, userId])

        // 専攻フロー（未定）

        res.json(true)
    } catch (err) {
        res.json(false)
    }
})

module.exports = router
