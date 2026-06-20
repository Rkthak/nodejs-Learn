const express = require("express");

const notesRouter = express.Router();

notesRouter.get("/", (request, response) => {
  response.status(200).json({ message: "note get..!" });
});
notesRouter.post("/", (request, response) => {
  response.status(200).json({ message: "note post..!" });
});
notesRouter.put("/", (request, response) => {
  response.status(200).json({ message: "note put..!" });
});
notesRouter.delete("/", (request, response) => {
  response.status(200).json({ message: "note delete..!" });
});

module.exports = notesRouter;
