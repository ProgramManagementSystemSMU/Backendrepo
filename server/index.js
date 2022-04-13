const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const teachersroute = require("./Routes/teachers.routes");
const coursesroute = require("./Routes/courses.routes");
const cohortsroute = require("./Routes/cohorts.routes");
const classroomsroute = require("./Routes/classrooms.routes");
const bookingroute = require("./Routes/booking.routes");
const boxroute = require("./Routes/boxs.routes");
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);

const io = new Server();

mongoose.connect("mongodb://localhost:27017/pmgsystem", {
  useNewUrlParser: true,
});

app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/", teachersroute);
app.use("/", coursesroute);
app.use("/", classroomsroute);
app.use("/", cohortsroute);
app.use("/", boxroute);
app.use("/", bookingroute);

server.listen(PORT, () => {
  console.log("Server Running");
});
