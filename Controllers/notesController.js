const noteController = {
  getAllNotes: (request, response) => {
    response.status(200).json({ message: "note get..!" });
  },
  postNote: (request, response) => {
    console.log(request.body);

    response.status(200).json({ message: "note post..!" });
  },
  updateNote: (request, response) => {
    response.status(200).json({ message: "note put..!" });
  },
  deleteNote: (request, response) => {
    response.status(200).json({ message: "note delete..!" });
  },
};

module.exports = noteController;
