const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the home page");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
});

server.listen(8081);
