const express = require("express")
const router = express.Router()

const get = require("./function/get")
const sql = require("./function/sql")

router.post("/createClassNewsRoom", async (req, res) => {
	const userId = get.userId(req)
	const classNewsRoomName = req.body.classNewsRoomName
	const classNewsRoomPassword = req.body.classNewsRoomPassword

	const sqlInsertClassNewsRoom = `
        INSERT INTO classes_list (
            created_user_id,
            class_name,
            class_password
        )
        VALUES (
            ?,
            ?,
            ?
        )
    `

	await sql.handleInsert(sqlInsertClassNewsRoom, [
		userId,
		classNewsRoomName,
		classNewsRoomPassword,
	])
})

router.post("/viewClassNewsRoom", async (req, res) => {
	const userId = get.userId(req)

	const sqlSelectClassRoom = `
        SELECT
            *
        FROM
            classes_list
        INNER JOIN
            user_profiles
        ON
            classes_list.created_user_id = user_profiles.user_id
    `

	const classRooms = await sql.handleSelect(sqlSelectClassRoom, [userId])

	res.json(classRooms)
})

router.post("/enterClassRoom", async (req, res) => {
	const classId = req.body.classId

	const sqlSelectEnterClassRoom = `
        SELECT
            *
        FROM
            classes_list
        WHERE
            class_id=?
        `

        const enterClassRoom = await sql.handleSelect(sqlSelectEnterClassRoom, [classId])

        res.json(enterClassRoom)
})

module.exports = router