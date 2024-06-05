const { Server } = require("socket.io");

module.exports = async (server) => {
  try {
    const io = new Server(server);

    io.on("connection", (socket) => {
      console.log("a user connected", socket.id);
      socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
