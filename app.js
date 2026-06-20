// import http module
const express = require("express");
const notesRouter = require("./Router/notesRoute");

// create a http server
const app = express();

// create server routes
app.use("/notes", notesRouter);

// error handle with routes
app.use((request, response, next) => {
  response.status(400).json({ message: "page not found" });
});

module.exports = app;
