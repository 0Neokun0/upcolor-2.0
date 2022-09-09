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
    const company = await sql.handleSelect(sqlSelectCompany, userId)

    res.json(company[0])
})

module.exports = router