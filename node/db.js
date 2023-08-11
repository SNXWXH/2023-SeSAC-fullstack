const mysql = require("mysql2");

require("dotenv").config();

const DB_INFO = {
  host: "",
  port: 3306,
  user: "",
  password: process.env.DB_PASSWD,
  database: mydb,
};

module.exports = {
  getConn() {
    return mysql.createConnection(DB_INFO);
  },

  async get(table, id) {
    const conn = this.getConn();
    const rows = await conn.query(`select * form ${table} where id = ${id}`);

    console.log("🚀  rows:", rows);
  },
  getDbInfo() {
    return DB_INFO;
  },
};
