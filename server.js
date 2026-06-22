require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("db connected successfuly");
    app.listen(3000, "localhost", (error) => {
      if (error) {
        console.error("Server starting error:", error.message);
        return;
      }

      console.log("server is running @ http://localhost:3000");
    });
  })
  .catch((error) => {
    console.log("db error", error.errmsg);
  });

// run the http server
