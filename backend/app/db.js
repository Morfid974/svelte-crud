const { Pool } = require('pg');
exports.pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: "postgres",
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.DBPORT,
  connectionTimeoutMillis: 5000,
});