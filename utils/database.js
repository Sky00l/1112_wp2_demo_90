const { Pool } = require('pg');

let pool;

if(process.env.NODE_ENV === 'SUPABASE') {
    pool = new Pool({
        user: 'postgres',
        host: process.env.SUPABASE_HOST,
        port: '5432',
        database: 'postgres',
        password: '0000'
    });
    console.log(`Connecting PostgreSQL database `)
}else{
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        port: '5433',
        database: 'wp2_demo_90',
        password: '0000'
    });
}


console.log(`Connecting PostgreSQL database  ${pool.options.database}`);

module.exports = pool;