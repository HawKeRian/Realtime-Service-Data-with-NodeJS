require("dotenv").config();
const mysql = require('mysql2/promise')

async function getData(){
    try {
        const connection =await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: process.env.MYSQL_PORT,
            ssl: null,
            connectTimeout: 0
        })

        var [Items, field] = await connection.query('SELECT * FROM history')
        return { success: true, data: Items }
    } catch (error) {
        return { success: false, data: null }
    }
}

module.exports = { getData };