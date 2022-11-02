const express = require("express");
const router = express.Router();

const get = require("./function/get");
const sql = require("./function/sql");

router.post("/createClassNewsRoom", async (req, res) => {
	const userId = get.userId(req);
	const classNewsRoomName = req.body.classNewsRoomName;
	const classNewsPassword = req.body.classNewsPassword;

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
    `;

	await sql.handleInsert(sqlInsertClassNewsRoom, [
		userId,
		classNewsRoomName,
		classNewsPassword,
	]);
});

router.post("/viewClassNewsRoom", async (req, res) => {
	const userId = get.userId(req);

	const sqlSelectClassNewsRoomsList = `
        SELECT
            *
        FROM
            classes_list
        INNER JOIN
            user_profiles
        ON
            classes_list.created_user_id = user_profiles.user_id
    `;

	const classNewsRoomsList = await sql.handleSelect(
		sqlSelectClassNewsRoomsList,
		[userId]
	);

	res.json(classNewsRoomsList);
});

router.post("/enterClassNewsRoom", async (req, res) => {
	const classId = req.body.classId;

	const sqlSelectEnterClassNewsRoom = `
        SELECT
            *
        FROM
            classes_list
        WHERE
            class_id=?
        `;

	const enterClassNewsRoom = await sql.handleSelect(sqlSelectEnterNewsClassRoom, [
		classId,
	]);

	res.json(enterClassNewsRoom);
});

module.exports = router;
