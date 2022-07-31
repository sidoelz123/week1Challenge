const mysql = require('mysql');

// konfigurasi database
const con = mysql.createConnection({
  // host: "remotemysql.com",
  // user: "FSVCdvZQGw",
  // password: "eXEUGgsoNT",
  // database: "FSVCdvZQGw",
  host: "localhost",
  user: "root",
  password: "ijaa",
  database: "week1Chunnin",
  multipleStatements: true
});

// cek koneksi database
con.connect(function (err){
    if(err){
      console.log('MYSQL not connected....')
    } else{
      console.log('MySQL connected.......');
    }
});

module.exports = con;
