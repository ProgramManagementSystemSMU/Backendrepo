const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const teachersroute = require("./routes/teachers.routes");
const coursesroute = require("./routes/courses.routes");
const cohortsroute = require("./routes/cohorts.routes");
const app = express();

//const EmployeeRoute = require('./routes/employee')
const authRoute = require("./routes/auth");

mongoose.connect("mongodb://localhost:27017/pmgsystem", {
  useNewUrlParser: true,
});

app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("./uploads", express.static("uploads"));

app.use("/", teachersroute);
app.use("/", coursesroute);
app.use("/", cohortsroute);

//app.use('/api/employee', EmployeeRoute)
app.use("/api", authRoute);

app.listen(PORT, () => {
  console.log("Sever Running");
});
