module.exports = async (server) => {
  try {
    const io = require("socket.io")(server, {
      cors: {
        origin: "*",
      },
    });

    let activeUsers = [];
    io.on("connection", (socket) => {
      socket.on("disconnect_user", (msg) => {
        if (activeUsers.includes())
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
