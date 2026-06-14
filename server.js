// import HTTP module
const http = require("http");

// create HTTP
const server = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  response.write(`<!DocType html>
    <html>
    <head>
    <title>NODEJS</title>
    </head>
    <body>
    <h1>Hello World </h1>
    </body>
    </html>
    `);
  response.end();
});

// run
server.listen(3000, "localhost", () => {
  console.log(`severlisning at localhost:3000`);
});
