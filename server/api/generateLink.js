const express = require("express")
const router = express.Router()

const jwt = require("jsonwebtoken")
const config = require("./config")

router.post("/teacher", (req, res) => {
    const password = req.body.password

    const token = jwt.sign({team: "NAOKO"}, password, {algorithm: "HS256", expiresIn: "1h"})

    const url = config.server.host + "/signup/teacher/" + token

    res.json(url)
})

router.post("/company", (req, res) => {
    const name = req.body.name

    const token = jwt.sign({name: name}, config.jwt.secret, config.jwt.options)

    const url = config.server.host + "/signup/company/" + token

    res.json(url)
})

module.exports = router