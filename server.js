const { mongoURI, PORT } = require("./utils/config");
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("db connected successfuly");

    // run the http server
    app.listen(PORT, "localhost", (error) => {
      if (error) {
        console.error("Server starting error:", error.message);
        return;
      }

      console.log(`server is listening @ ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("db error", error.errmsg);
  });
