const Pool = require('pg').Pool;

const pool = new Pool({
    host: process.env.host,
    user : process.env.user,
    port: process.env.db_port,
    password : process.env.password,
    database : 'bookdirectory'

})

module.exports = pool;


