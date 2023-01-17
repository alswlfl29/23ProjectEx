// const jwt = require("jsonwebtoken");

// const token = jwt.sign(
//   { name: "tu" },
//   "my-secret-key",
//   { expiresIn: "1m" },
//   (err, token) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(token);
//   }
// );

// jwt.verify(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidHUiLCJpYXQiOjE2NzM4NDQwMDUsImV4cCI6MTY3Mzg0NDA2NX0.owFX_rGg2S8JYwfQC34hNqgsGNqLALFdYzfYsZx3HPc",
//   "my-secret-key",
//   (error, decoded) => {
//     if (error) {
//       console.error(error);
//       return;
//     }
//     console.log(decoded);
//   }
// );

//get the client
const mysql = require("mysql2");

//create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
});

//simple query
// let name = "Page"; //변수일 경우
// "SELECT * FROM `table` WHERE `name`" + Page + " AND `age` >45",
// 위에 처럼 선언후 초기화를 하거나 ${name}처럼 동적으로 사용하면 안됨
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` >45',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
// with placeholder
connection.query(
  "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
  ["Page", 45], //?에 들어갈 값을 순서대로 입력
  function (err, results) {
    console.log(results);
  }
);
