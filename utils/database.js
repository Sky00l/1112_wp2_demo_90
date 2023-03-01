const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5433',
    database: 'wp2_demo_90',
    password: '0000'
})

console.log(`Connecting PostgreSQL database  ${pool.options.database}`);

module.exports = pool;