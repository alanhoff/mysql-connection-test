const mysql = require('mysql2/promise');

// Edit your connection info
const HOST = 'mysql.rds.amazonaws.com';
const PORT = '3306';
const USERNAME = 'root';
const PASSWORD = 'root';
const DEBUG = 0; // set to 1 to enable debug

// Do not edit anything below
(async () => {
  const connection = await mysql.createConnection({
    host: HOST,
    user: USERNAME,
    port: PORT,
    password: PASSWORD,
    debug: DEBUG
  });

  await connection.execute('SELECT 1 + 1;');
  await connection.end();

  console.log('Connected')
})().catch(() => {
  console.error('Failed to connect');
  process.exit(1);
});