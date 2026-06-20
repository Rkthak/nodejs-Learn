// tracks the activity happens in the server requests =====>

const logger = (request, response, next) => {
  console.log(request.method, request.url);
  next();
};

module.exports = logger;
