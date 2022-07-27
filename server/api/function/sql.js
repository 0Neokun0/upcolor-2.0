const config = require("../config")
const mysql = require("mysql")
const db = mysql.createConnection(config.db)

exports.handleSelect = async (sqlSelect, values) => {
    const getValue = await new Promise((res, rej) => {
        db.query(sqlSelect, values, (err, res) => {
            if (err) rej(err)

            if (res.length) {
                res(res)
            } else {
                res(false)
            }
        })
    })

    return getValue
}

exports.handleInsert = async (sqlInsert, values) => {
    const getValue = await new Promise((res, rej) => {
        db.query(sqlInsert, values, (err, res) => {
            if (err) rej(err)

            res(res)
        })
    })

    return getValue
}

exports.handleUpdate = async (sqlUpdate, values) => {
    db.query(sqlUpdate, values, (err) => {
        if (err) throw err

        return true
    })
}

exports.handleDelete = async (sqlDelete, values) => {
    db.query(sqlDelete, values, (err) => {
        if (err) throw err

        return true
    })
}