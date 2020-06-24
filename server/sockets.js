const Message = require("./model").MessageModel;

module.exports = function (io) {
  io.on("connection", socket => {
    console.log("connect")
    socket.on("NEW_MESSAGE", message => {
      let newMessage = new Message({
        body: message.body,
        author: message.author
      });
      newMessage
        .save()
        .then(() => {
          Message.find({})
            .then(messages => {
              io.emit("CHAT_MESSAGES", messages);
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  });
};