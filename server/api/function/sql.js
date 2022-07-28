const config = require("../config")
const mysql = require("mysql")
const db = mysql.createConnection(config.db)

exports.handleSelect = async (sqlSelect, values) => {
    const getValue = await new Promise((response, reject) => {
        db.query(sqlSelect, values, (err, res) => {
            if (err) reject(err)

            if (res.length) {
                response(res)
            } else {
                response(false)
            }
        })
    })

    return getValue
}

exports.handleInsert = async (sqlInsert, values) => {
    const getValue = await new Promise((response, reject) => {
        db.query(sqlInsert, values, (err, res) => {
            if (err) reject(err)

            response(res)
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