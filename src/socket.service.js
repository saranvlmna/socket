module.exports = async (server) => {
  try {
    const io = require("socket.io")(server, {
      cors: {
        origin: "*",
      },
    });
    let activeUsers = [];
    io.on("connection", (socket) => {
      console.log("a user connected", socket.id);
      socket.on("disconnect_user", (msg) => {
        console.log("user disconnected", socket.id);
        if (activeUsers.includes(msg.userName)) {
   
        }
        io.emit("activeUsers", {
          data: activeUsers,
        });
      });

      socket.on("sendMessage", (msg) => {
        io.emit("responseMessage", {
          name: msg.name,
          text: msg.text,
          id: msg.id,
        });
      });

      socket.on("newUser", (msg) => {
        if (!activeUsers.includes(msg.userName)) {
          activeUsers.push(msg.userName);
        }
        io.emit("activeUsers", {
          data: activeUsers,
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};
