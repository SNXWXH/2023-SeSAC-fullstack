// import http from "http"; //ESM
const http = require("http"); //CJS

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});

// console.log("xxx");

server.listen(80, () => console.log("Server Started at 80"));

// module.exports = function f() {
//   return [1, 2, 3];
// };
