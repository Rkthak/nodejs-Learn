// import http module
const express = require("express");
const notesRouter = require("./Router/notesRoute");
const errorPage = require("./Middlewares/errorPage");
const logger = require("./Middlewares/logger");

// create a http server
const app = express();

app.use(logger);

// create server routes
app.use("/notes", notesRouter);

// error handle with routes
app.use(errorPage);

module.exports = app;
