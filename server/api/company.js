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
        SELECT
            user_id,
            company_id,
            company_name,
            manager_name,
            manager_mail,
            manager_image,
            introduction,
            business,
            ceo_message,
            address,
            course_ids,
            occupation_ids,
            prefecture_ids,
            homepage_url,
            jobsite_url
        FROM
            company_infomation
    `

    const companies = await sql.handleSelect(sqlSelectCompanies, [])
    const courses = await get.list("course")
    const occupations = await get.list("occupation")
    const prefectures = await get.list("prefecture")

    res.json({
        companies: companies,
        search: {
            courses: courses,
            occupations: occupations,
            prefectures: prefectures,
        }
    })
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

router.post("/getCompanyProfile", async (req, res) => {
    try {
        const userId = get.userId(req)
        const sqlSelectCompanyId = `
            SELECT
                company_id
            FROM
                company_profiles
            WHERE
                user_id = ?
        `
        const companyId = await sql.handleSelect(sqlSelectCompanyId, [userId])
        const company = await get.company(companyId[0]["company_id"])

        console.log(company)

        const courses = await get.list("course")
        const occupations = await get.list("occupation")
        const prefectures = await get.list("prefecture")

        if (company["course_ids"]) {
            company["course_names"] = company["course_ids"].split(",").map((id) => Number(id) === -1 ? "情報無し" : courses[Number(id) - 1]["course_name"]).join('・')
        }
        if (company["occupation_ids"]) {
            company["occupation_names"] = company["occupation_ids"].split(",").map((id) => Number(id) === -1 ? "情報無し" : occupations[Number(id) - 1]["occupation_name"]).join('・')
        }
        if (company["prefecture_ids"]) {
            company["prefecture_names"] = company["prefecture_ids"].split(",").map((id) => Number(id) === -1 ? "情報無し" : prefectures[Number(id) - 1]["prefecture_name"]).join('・')
        }
        res.json(company)
    } catch (err) {
        console.log(err)
        res.status(404)
    }
})

router.post("/getCompany", async (req, res) => {
    try {
        const companyId = req.body.companyId
        const company = await get.company(companyId)

        const courses = await get.list("course")
        const occupations = await get.list("occupation")
        const prefectures = await get.list("prefecture")

        if (company["course_ids"]) {
            company["course_names"] = company["course_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : courses[Number(id) - 1]["course_name"]).join('・')
        }
        if (company["occupation_ids"]) {
            company["occupation_names"] = company["occupation_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : occupations[Number(id) - 1]["occupation_name"]).join('・')
        }
        if (company["prefecture_ids"]) {
            company["prefecture_names"] = company["prefecture_ids"].split(",").map((id) => Number(id) === -1 ? "なし" : prefectures[Number(id) - 1]["prefecture_name"]).join('・')
        }

        res.json(company)
    } catch (err) {
        console.log(err)
        res.status(404)
    }
})

module.exports = router
