const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema({
 Id: {
  type: String,
},
  location: {
    type: String,
  },
});

const Classroom = mongoose.model("classroom", ClassroomSchema);
module.exports = Classroom;