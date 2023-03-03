require("dotenv").config();
const { Pool } = require('pg');

module.exports = {
    getData,
}

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    ssl: null,
    query_timeout: 60000,
    connectTimeout: 200
})

 function getData(){
    try {
        let sql = "SELECT * FROM mtlcarpark.floor3;"
        const result = pool.query(sql)
        if (result) {
            return result
        }
    } catch {

    }
}

process.on('exit', () => {
    pool.end()
});

process.on('SIGINT', () => {
    console.log('Received SIGINT signal');
    process.exit(1);
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM signal');
    process.exit(1);
});

process.on('SIGUSR1', () => {
    console.log('Received SIGUSR1 signal');
    process.exit(1);
});