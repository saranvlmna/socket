const express = require("express");
const { createServer } = require("node:http");
const socketService = require("./src/socket.service");
const port = 7001;
var app = express();

const server = createServer(app);
server.listen(port, () => {
  console.log(`socket service listening at http://localhost:${port}/ 🤡`);
});

socketService(server);
