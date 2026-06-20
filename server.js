const app = require("./app");

// run the http server
app.listen(3000, "localhost", (error) => {
  if (error) {
    console.error("Server starting error:", error.message);
    return;
  }

  console.log("server is running @ http://localhost:3000");
});
