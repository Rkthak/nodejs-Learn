require("dotenv").config();

const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const HOST = process.env.HOST;

module.exports = { mongoURI, PORT, HOST };
