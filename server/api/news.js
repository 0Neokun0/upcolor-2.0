const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.use((req, res, next) => {
    console.log("[news] Time: ", Date.now())
    next()
})

router.post("/addNews/", async (req, res) => {
    const userId = get.userId(req);
    const text = req.body.text

    const sqlInsertNews = `
        INSERT INTO news(
            news_user_id,
            news_title,
            news_text,
            target_course_id,
            parent_id
        )
        VALUES(
            ?,
            ?,
            ?,
            0,
            0,
            0
        )
    `
    const addNews = await sql.handleInsert(sqlInsertNews, [userId, text])

    res.json(addNews["insertId"])
})

router.post("/addReply", async (req, res) => {
    const userId = get.userId(req)
    const text = req.body.text
    const parentId = req.body.parentId

    const sqlInsertReply = `
        INSERT INTO newss(
            news_user_id,
            news_text,
            news_likes,
            parent_id
        )
        VALUES(
            ?,
            ?,
            0,
            ?
        )
    `
    const addReply = await sql.handleInsert(sqlInsertReply, [userId, text, parentId])

    res.json(addReply["insertId"])
})

router.use("/getNews", async (req, res) => {
    const newsId = req.body.newsId

    const sqlSelectNews = `
        SELECT
            newss.*,
            user_profiles.user_name
        FROM
            newss
            INNER JOIN
                user_profiles ON
                newss.news_user_id = user_profiles.user_id
        WHERE
            news_id = ?
    `
    const news = await sql.handleSelect(sqlSelectNews, [newsId])

    const sqlSelectReplys = `
        SELECT
            newss.*,
            user_profiles.user_name
        FROM
            newss
            INNER JOIN
                user_profiles ON
                newss.news_user_id = user_profiles.user_id
        WHERE
            parent_id = ?
        ORDER BY
            newss.created_at DESC
    `
    const replys = await sql.handleSelect(sqlSelectReplys, [newsId])

    res.json({
        news: news,
        replys: replys,
    })
})

router.use("/getNewsList", async (req, res) => {
    const sqlSelectNewss = `
        SELECT
            newss.*,
            user_profiles.user_name
        FROM
            newss
            INNER JOIN
                user_profiles ON
                newss.news_user_id = user_profiles.user_id
        WHERE parent_id = 0
        ORDER BY
            newss.created_at DESC
    `
    const newss = await sql.handleSelect(sqlSelectNewss, [])

    res.json(newss)
})

module.exports = router