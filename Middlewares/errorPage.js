const errorPage = (request, response, next) => {
  response.status(400).json({ message: "page not found" });
};

module.exports = errorPage;
