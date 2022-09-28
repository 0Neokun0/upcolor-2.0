const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.use((req, res, next) => {
    console.log("[post] Time: ", Date.now())
    next()
})

router.post("/addPost", async (req, res) => {
    const userId = get.userId(req)
    const text = req.body.text

    const sqlInsertPost = `
        INSERT INTO posts(
            post_user_id,
            post_text,
            post_likes,
            parent_id
        )
        VALUES(
            ?,
            ?,
            0,
            0
        )
    `
    const addPost = await sql.handleInsert(sqlInsertPost, [userId, text])

    res.json(addPost["insertId"])
})

router.post("/addReply", async (req, res) => {
    const userId = get.userId(req)
    const text = req.body.text
    const parentId = req.body.parentId

    const sqlInsertReply = `
        INSERT INTO posts(
            post_user_id,
            post_text,
            post_likes,
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

router.use("/getPost", async (req, res) => {
    const postId = req.body.postId

    const sqlSelectPost = `
        SELECT
            posts.*,
            user_profiles.user_name
        FROM
            posts
            INNER JOIN
                user_profiles ON
                posts.post_user_id = user_profiles.user_id
        WHERE
            post_id = ?
    `
    const post = await sql.handleSelect(sqlSelectPost, [postId])

    const sqlSelectReplys = `
        SELECT
            posts.*,
            user_profiles.user_name
        FROM
            posts
            INNER JOIN
                user_profiles ON
                posts.post_user_id = user_profiles.user_id
        WHERE
            parent_id = ?
        ORDER BY
            posts.created_at DESC
    `
    const replys = await sql.handleSelect(sqlSelectReplys, [postId])

    res.json({
        post: post,
        replys: replys,
    })
})

router.use("/getPostList", async (req, res) => {
    const sqlSelectPosts = `
        SELECT
            posts.*,
            user_profiles.user_name
        FROM
            posts
            INNER JOIN
                user_profiles ON
                posts.post_user_id = user_profiles.user_id
        WHERE parent_id = 0
        ORDER BY
            posts.created_at DESC
    `
    const posts = await sql.handleSelect(sqlSelectPosts, [])

    res.json(posts)
})

module.exports = router