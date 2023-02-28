require("dotenv").config();
const mysql = require('mysql2/promise')

let connection;

async function getData(){
    try {
        connection =await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: process.env.MYSQL_PORT,
            ssl: null,
            connectTimeout: 0
        })

        var [Items, field] = await connection.query('SELECT * FROM overview')
        return { success: true, data: Items }
    } catch (error) {
        return { success: false, data: null }
    }
}

function close() {
    connection.end();
    console.log('Closed database connection');
}

process.on('exit', () => {
    close();
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

module.exports = { getData, close };
