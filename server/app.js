const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: [`http://localhost:3000`],
    method: ["GET", "POSt"],
  },
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
io.on("connection", (socket) => {
    console.log("new client connected: " + socket.id);
  
    socket.on("join", function (data) {
      console.log(data);
    });
  
    socket.on("disconnect", () => {
      console.log("Client disconnect");
    });  
  });
  
  server.listen(8080, function () {
    console.log("Listening on port 8080!");
  });