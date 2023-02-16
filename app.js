const http = require("http");
const { readFileSync, createReadStream } = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  //   const text = readFileSync("./content/bigFile.txt", "utf-8");
  //   res.end(text);
  const fileStream = createReadStream("./content/bigFile.txt", "utf-8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });

  fileStream.on("error", (err) => {
    console.log(err);
  });
});

server.listen(8083, () => {
  console.log("Server listening on port 8083");
});
