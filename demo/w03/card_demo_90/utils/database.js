const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'wp2_demo_90',
    password: '0000'
})

console.log('pool', pool.options.database);

module.exports = pool;