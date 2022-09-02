const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/teacher", (req, res) => {
    const token = req.body.token
    const password = req.body.password

    const NAOKO = get.password(token, password)

    if (NAOKO) {
        res.json(true)
    } else {
        res.json(false)
    }
})

router.post("/company", async (req, res) => {
    const token = req.body.token

    const name = get.name(token)

    console.log(name)

    const sqlSelectCompany = `
        SELECT
            company_id
        FROM
            company_profiles
        WHERE
            company_name = ?
    `
    const companyId = await sql.handleSelect(sqlSelectCompany, [name])

    if (!companyId) {
        res.json(name)
    } else {
        res.json(false)
    }
})

module.exports = router