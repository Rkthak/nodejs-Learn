const Note = require("../models/note");

const noteController = {
  getAllNotes: async (request, response) => {
    const notes = await Note.find({}, { __v: 0 });

    response.status(200).json({ notes });
  },
  postNote: async (request, response) => {
    try {
      const { title, description, tag } = request.body;

      const newNote = new Note({
        title,
        description,
        tag,
      });

      const savedNote = await newNote.save();

      response
        .status(201)
        .json({ message: "note created successfully", data: savedNote });
    } catch (e) {
      response
        .status(500)
        .json({ message: "server internal error", error: e.data.message });
    }
  },
  updateNote: (request, response) => {
    response.status(200).json({ message: "note put..!" });
  },
  deleteNote: (request, response) => {
    response.status(200).json({ message: "note delete..!" });
  },
};

module.exports = noteController;
