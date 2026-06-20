const express = require("express");
const {
  getAllNotes,
  postNote,
  updateNote,
  deleteNote,
} = require("../Controllers/notesController");

const notesRouter = express.Router();

notesRouter.get("/", getAllNotes);
notesRouter.post("/", postNote);
notesRouter.put("/", updateNote);
notesRouter.delete("/", deleteNote);

module.exports = notesRouter;
