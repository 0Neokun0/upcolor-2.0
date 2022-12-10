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
const classNews = require("./api/classNews")
const privateChat = require("./api/privateChat")
const companyNews = require("./api/companyNews")

const express = require("express")

const app = express()
app.use(express.static("public"))
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
app.use("/classNews", classNews)
app.use("/privateChat", privateChat)
app.use("/companyNews", companyNews)

// 双方向通信
const server = require("http").createServer(app)
require("./api/socket")(app, server)

server.listen(socketPort)
console.log(`socket open port ${socketPort}`)
