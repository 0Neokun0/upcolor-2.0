const cookie = require("cookie")
const jwt = require("jsonwebtoken")
const config = require("../config")

exports.userId = (req) => {
    const cookies = cookie.parse(req.headers.cookie || "")
    const token = cookies["token"]

    let userId

    try {
        jwt.verify(token, config.jwt.secret, (err, res) => {
            userId = res["userId"]
        })
    } catch (err) {
        userId = false
    }
    
    return userId
}

exports.password = (token, password) => {
    let NAOKO

    try {
        jwt.verify(token, password, (err, res) => {
            NAOKO = res["team"] 
        })
    } catch (err) {
        NAOKO = false
    }

    return NAOKO
}

exports.name = (token) => {
    let name

    try {
        jwt.verify(token, config.jwt.secret, (err, res) => {
            name = res["name"]
        })
    } catch (err) {
        name = false
    }

    return name
}