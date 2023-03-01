require("dotenv").config();
var mysql = require('mysql')
const util = require('util')

module.exports = {
    getData,
}

var pool = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    ssl: null,
    queryTimeout: 60000,
    connectTimeout: 200
})

pool.query = util.promisify(pool.query);

function getData(){
    try {
        let sql = "SELECT * FROM overview;"
        const result = pool.query(sql)
        if (result) {
            return result
        }
    } catch {}
}