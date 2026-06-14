// import http module
const express = require("express");

// create a http server
const app = express();

// create server routes
app.get("/", (request, response) => {
  response.status(200).json({ message: "hello world..!" });
});

// error handle with routes
app.use((request, response, next) => {
  response.status(400).json({ message: "page not found" });
});

// run the http server
app.listen(3000, "localhost", () => {
  console.log("server is running @ http://localhost:3000");
});
