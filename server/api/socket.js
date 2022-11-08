const jwt = require("jsonwebtoken")
const sql = require("./function/sql")
const config = require("./config")

module.exports = (app, server) => {
    const { Server } = require("socket.io")
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
        withCredentials: true,
    })

    io.on("connection", (socket) => {
        console.log("user connected")

        // ブラウザが切断したときの処理
        socket.on("disconnect", () => {
            console.log("user disconnected")
        })

        socket.on("groupChat join", (leave, id) => {
            socket.leave(leave)
            socket.join(id)
        })

        socket.on("groupChat msg", async (token, id, msg) => {
            let userId
            try {
                jwt.verify(token, config.jwt.secret, (err, res) => {
                    userId = res["userId"]
                })
            } catch (err) {
                userId = false
            }

            const sqlInsertChat = `
                INSERT INTO group_chat(
                    sent_user_id,
                    received_group_id,
                    sent_text
                )
                VALUES(
                    ?,
                    ?,
                    ?
                )
            `
            const insert = await sql.handleInsert(sqlInsertChat, [userId, id, msg])

            const sqlSelectChat = `
                SELECT
                    group_chat.*,
                    user_profiles.user_name
                FROM
                    group_chat
                    INNER JOIN
                        user_profiles ON
                        group_chat.sent_user_id = user_profiles.user_id
                WHERE
                    group_chat.chat_id = ?
            `

            const response = await sql.handleSelect(sqlSelectChat, [insert["insertId"]])

            io.to(id).emit("groupChat", response[0])
        })
    })
}