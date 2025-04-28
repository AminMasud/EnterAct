const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'enteract_db'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('✅ Connected to MySQL database')
})

module.exports = conn;