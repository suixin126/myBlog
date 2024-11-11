const mysql = require('mysql2');

// 创建连接池
const pools = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'my-blog',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pools;