// import HTTP module
const http = require("http");

// create HTTP
const server = http.createServer((request, response) => {
  response.write("hello world");
  response.end();
});

// run
server.listen(3000, "localhost", () => {
  console.log(`severlisning at localhost:3000`);
});
