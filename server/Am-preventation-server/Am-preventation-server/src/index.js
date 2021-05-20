const express = require("express");
const mongoose = require("mongoose");
const { SignInRouter } = require("./routes/signin");
const { RegistrationRouter } = require("./routes/registration");
const { json } = require("express");
const cors = require("cors");
const QuizRouter = require("./routes/quizRoutes");
const CourseRouter = require("./routes/courseRoutes");
const { Message } = require("./models/message");
const { User } = require("./models/user");
const FaqRouter = require("./routes/faqRoutes");
// const socketIO = require("socket.io");
const app = express();
app.use(cors());

app.use(json());
// const io = require("socket.io")(http);

app.use(SignInRouter);
app.use(RegistrationRouter);
app.use(QuizRouter);
app.use(CourseRouter);
app.use(FaqRouter);

const http = require("http").createServer(app);
const io = require("socket.io")(http);
const connectionStartup = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }

  io.on("connection", (socket) => {
    console.log("Socket connected", socket.id);
    // Get the last 10 messages from the database.
    // Message.find({user:})
    //   .sort({ createdAt: -1 })
    //   .limit(10)
    //   .exec((err, messages) => {
    //     if (err) return console.error(err);

    //     // Send the last messages to the user.
    //     socket.emit("init", messages);
    //   });

    socket.on("message", ({ msg, id }) => {
      const message = new Message({
        user: id,
        message: msg,
      });
      message.save();

      User.findOne({ _id: id }, (err, user) => {
        user.messages.push(message._id);
        user.save();
      });

      User.findOne({ _id: "609fc532424b451ba077351b" }, (err, user) => {
        console.log(user);
      });
    });

    // // Listen to connected users for a new message.
    // socket.on("message", ({msg,id}) => {
    // Create a message with the content and the name of the user.
    // const message = new Message({
    //   content: msg.content,
    //   name: msg.name,
    // });
    // console.log(msg,id)

    //   // Save the message to the database.
    // message.save((err) => {
    //   if (err) return console.error(err);
    // });

    //   // Notify all other users about a new message.
    //   socket.broadcast.emit("push", msg);
    // });

    socket.on("disconnect", () => {
      console.log("Socket disconnected", socket.id);
    });
  });

  http.listen(5000, () => {
    console.log("Server is connected at 5000");
  });
};

connectionStartup();
