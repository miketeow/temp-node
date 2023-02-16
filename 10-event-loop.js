// Event loop example
const { readFile } = require("fs");

console.log("start first task");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Complete the first task");
});

console.log("Start the next task");

//Event loop example 2
console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");

//Event loop example 3
setInterval(() => {
  console.log("Hello, world!");
}, 2000);
console.log("Event loop example 3 start");
// Ctrl + C to kill the process

// Event loop example 4
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello world");
});

server.listen(8083, () => {
  console.log("Server listening on port");
});
