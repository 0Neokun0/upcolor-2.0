const express = require("express")
const router = express.Router()

const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/post/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + ".png")
    }
})
const upload = multer({ storage: storage })

const get = require("./function/get")
const sql = require("./function/sql")

router.use((req, res, next) => {
    console.log("[post] Time: ", Date.now())
    next()
})

router.post("/addPost", upload.single("image"), async (req, res) => {
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
    const post = await sql.handleInsert(sqlInsertPost, [userId, text])

    if (req.file) {
        const sqlInsertImage = `
                INSERT INTO images(
                    image_url,
                    image_id,
                    image_type
                )
                VALUES(
                    ?,
                    ?,
                    3
                )
        `
        await sql.handleInsert(sqlInsertImage, [req.file.filename, post["insertId"]])
    }

    res.json(post["insertId"])
})

router.post("/addReply", upload.single("image"), async (req, res) => {
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

    if (req.file) {
        const sqlInsertImage = `
                INSERT INTO images(
                    image_url,
                    image_id,
                    image_type
                )
                VALUES(
                    ?,
                    ?,
                    3
                )
        `
        await sql.handleInsert(sqlInsertImage, [req.file.filename, addReply["insertId"]])
    }

    res.json(addReply["insertId"])
})

router.use("/getPost", async (req, res) => {
    const postId = req.body.postId

    const sqlSelectPost = `
        SELECT
            posts.*,
            user_profiles.user_name,
            url_icon.image_url AS url_icon,
            url_post.image_url AS url_post
        FROM
            posts
        INNER JOIN
            user_profiles ON
            posts.post_user_id = user_profiles.user_id
        INNER JOIN
            images
        AS
            url_icon
        ON
            user_profiles.user_id = url_icon.image_id AND
            url_icon.image_type = 1
        LEFT OUTER JOIN
            images
        As
            url_post
        ON
            posts.post_id = url_post.image_id AND
            url_post.image_type = 3
        WHERE
            post_id = ?
    `
    const post = await sql.handleSelect(sqlSelectPost, [postId])

    const sqlSelectReplys = `
        SELECT
            posts.*,
            user_profiles.user_name,
            url_icon.image_url AS url_icon,
            url_post.image_url AS url_post
        FROM
            posts
        INNER JOIN
            user_profiles ON
            posts.post_user_id = user_profiles.user_id
        INNER JOIN
            images
        AS
            url_icon
        ON
            user_profiles.user_id = url_icon.image_id AND
            url_icon.image_type = 1
        LEFT OUTER JOIN
            images
        As
            url_post
        ON
            posts.post_id = url_post.image_id AND
            url_post.image_type = 3
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
            user_profiles.user_name,
            url_icon.image_url AS url_icon,
            url_post.image_url AS url_post
        FROM
            posts
        INNER JOIN
            user_profiles
        ON
            posts.post_user_id = user_profiles.user_id
        INNER JOIN
            images
        AS
            url_icon
        ON
            user_profiles.user_id = url_icon.image_id AND
            url_icon.image_type = 1
        LEFT OUTER JOIN
            images
        As
            url_post
        ON
            posts.post_id = url_post.image_id AND
            url_post.image_type = 3
        WHERE
            parent_id = 0
        ORDER BY
            posts.created_at
        DESC
    `
    const posts = await sql.handleSelect(sqlSelectPosts, [])

    res.json(posts)
})

module.exports = router