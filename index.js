const mysql = require('mysql2/promise');

// Edit your connection info
// More info on SSL: https://github.com/sidorares/node-mysql2/blob/07a429d9765dcbb24af4264654e973847236e0de/documentation/Examples.md#connecting-over-encrypted-connection
const HOST = 'mysql.rds.amazonaws.com';
const PORT = '3306';
const USERNAME = 'root';
const PASSWORD = 'root';
const DEBUG = 0; // set to 1 to enable debug
const SSL = 'Amazon RDS';

// Do not edit anything below
(async () => {
  const connection = await mysql.createConnection({
    host: HOST,
    user: USERNAME,
    port: PORT,
    password: PASSWORD,
    debug: DEBUG,
    ssl: SSL
  });

  await connection.execute('SELECT 1 + 1;');
  await connection.end();

  console.log('Connected')
})().catch((err) => {
  console.error(err);
  console.error('Failed to connect');
  process.exit(1);
});