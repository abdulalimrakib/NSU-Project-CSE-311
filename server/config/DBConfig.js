const mysql = require('mysql')

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "job_portal"
});

module.exports = database