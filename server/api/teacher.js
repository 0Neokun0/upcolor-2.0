const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/addNews", async (req, res) => {
    const userId = get.userId(req)
    const news = req.body.news
    const target = req.body.target

    const sqlInsertNews = {
        
    }
})

module.exports = router