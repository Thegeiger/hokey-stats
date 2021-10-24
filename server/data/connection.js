const mysql = require('mysql');

const db_name = "hokey_stats"
const user = process.env.db_user || "root"
const mysql_password = process.env.mysql_password || 'NewPassword'
const db_password = process.env.db_password || 'NewPassword'

function handle_db_error(error) {
  if (error) {
    console.error("[Error][Database] error while using hokey_stat DB");
    throw error;
  }
}

function create_db() {
  const mysql_connection = mysql.createConnection({
    host: 'localhost',
    user: user,
    password: mysql_password,
  })


  mysql_connection.connect((err) => {
    if (err) throw err;
    mysql_connection.query(`CREATE DATABASE IF NOT EXISTS ${db_name}`, function (err, _) {
      if (err) throw err;
      console.info(`[Info] we created ${db_name}`);
    });
  });
}

const db_connection = mysql.createConnection({
  host: 'localhost',
  user: user,
  password: db_password,
  database: `${db_name}`,
  multipleStatements: true
});


db_connection.connect((err) => {
  if (err && err.code == "ER_BAD_DB_ERROR") create_db()
  else if (err) throw err
  console.info(`[Info] ${db_name} Database started`);
});

module.exports = {
  db_connection,
  db_name,
  handle_db_error
}