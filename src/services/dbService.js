const mysql = require('mysql2');
const dbConfig = require('../db/config');

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL !");
});

module.exports = connection;
