const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data received with name: ${name} and id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Do something else`);
});

customEmitter.emit("response", "john", 25);

const http = require("http");

const server = http.createServer();

//Using EventEmitter API
server.on("request", (req, res) => {
  res.end(`Welcoms`);
});

server.listen(8083);
