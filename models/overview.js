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
            pool.end()
            return result
        }
        pool.end()
    } catch {}
}

// require("dotenv").config();
// const { Pool } = require('pg');

// module.exports = {
//     getData,
// }

// const pool = new Pool({
//     host: process.env.PGHOST,
//     user: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     database: process.env.PGDATABASE,
//     port: process.env.PGPORT,
//     ssl: null,
//     query_timeout: 60000,
//     connectTimeout: 200
// })

// function getData(){
//     try {
//         let sql = "SELECT * FROM overview;"
//         const result = pool.query(sql)
//         if (result) {
//             pool.end();
//             return result
//         }
//         pool.end();
//     } catch {}
// }