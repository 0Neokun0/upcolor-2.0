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

        socket.on("privateChat join", (token, leave, join) => {
            // 自分と選択ユーザーIDを昇順に並び変えてルーム名にする
            try {
                let leaveRoom
                let joinRoom

                jwt.verify(token, config.jwt.secret, (err, res) => {
                    let userId = res["userId"]

                    let low = userId
                    let high = leave
                    let tmp
                    if (low > high) {
                        tmp = high
                        high = low
                        low = tmp
                    }
                    leaveRoom = (String(`${low}:${high}`))

                    low = userId
                    high = join
                    if (low > high) {
                        tmp = high
                        high = low
                        low = tmp
                    }
                    joinRoom = (String(`${low}:${high}`))

                    io.to(socket.id).emit("privateChat room", joinRoom)

                    socket.leave(leaveRoom)
                    socket.join(joinRoom)
                })
            } catch (error) {
                console.log(error)
            }
        })

        socket.on("privateChat msg", async (token, target, room, msg) => {
            try {
                let userId
                try {
                    jwt.verify(token, config.jwt.secret, (err, res) => {
                        userId = res["userId"]
                    })
                } catch (err) {
                    userId = false
                }

                if (userId) {
                    const sqlInsertPrivateChat = `
                        INSERT INTO private_chat(
                            sent_user_id,
                            received_user_id,
                            sent_text
                        )
                        VALUES(
                            ?,
                            ?,
                            ?
                        )
                    `
                    const insert = await sql.handleInsert(sqlInsertPrivateChat, [userId, target, msg])

                    const sqlSelectPrivateChat = `
                        SELECT
                            private_chat.chat_id AS id,
                            sender.user_name AS name,
                            images.image_url AS icon,
                            private_chat.created_at AS time,
                            private_chat.sent_text AS text
                        FROM
                            private_chat
                        INNER JOIN
                            user_profiles AS sender ON
                            sender.user_id = private_chat.sent_user_id
                        INNER JOIN
                            user_profiles AS receiver ON
                            receiver.user_id = private_chat.sent_user_id
                        INNER JOIN
                            images ON
                            sender.user_id = images.image_id AND
                            images.image_type = 1
                        WHERE
                            private_chat.chat_id = ?
                    `

                    const response = await sql.handleSelect(sqlSelectPrivateChat, [insert["insertId"]])

                    const self = {
                        id: response[0]["id"],
                        name: response[0]["name"],
                        self: 1,
                        icon: response[0]["icon"],
                        time: response[0]["time"],
                        text: response[0]["text"],
                    }
                    const other = {
                        id: response[0]["id"],
                        name: response[0]["name"],
                        self: 0,
                        icon: response[0]["icon"],
                        time: response[0]["time"],
                        text: response[0]["text"],
                    }

                    io.to(socket.id).emit("privateChat", self)
                    socket.broadcast.to(room).emit("privateChat", other)
                }
            } catch (error) {
                console.log(error)
            }
        })
    })
}