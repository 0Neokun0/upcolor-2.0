const port = 4000
const socketPort = 5000

const account = require("./api/account")
const group = require("./api/group")
const course = require("./api/course")
const teamWork = require("./api/teamWork")
const timeTable = require("./api/timeTable")
const generateLink = require("./api/generateLink")
const post = require("./api/post")
const check = require("./api/check")
const student = require("./api/student")
const company = require("./api/company")
const teacher = require("./api/teacher")
const news = require("./api/news")

const express = require("express")

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(port, () => console.log(`open port ${port}`))

app.use("/account", account)
app.use("/group", group)
app.use("/course", course)
app.use("/teamWork", teamWork)
app.use("/timeTable", timeTable)
app.use("/generateLink", generateLink)
app.use("/post", post)
app.use("/check", check)
app.use("/student", student)
app.use("/company", company)
app.use("/teacher", teacher)
app.use("/news", news)


const { Server } = require("socket.io")
const server = require("http").createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) => {
    // ブラウザから接続されたときの処理
    console.log("a user connected")

    // ブラウザが切断したときの処理
    socket.on("disconnect", () => {
        console.log("user disconnected")
    })

    socket.on("groupChat join", (id) => {
        socket.join(id)
        console.log(id)
    })

    socket.on("groupChat msg", (id, msg) => {
        io.to(id).emit("groupChat", msg)
        console.log(id, msg)
    })

})

server.listen(socketPort);
console.log(`socket open port ${socketPort}`);