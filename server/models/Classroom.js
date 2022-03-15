const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

const classroomSchema = new Schema(
  {
    // mongo works with schema (entity)
    ID: {
      type: String,
    },
    location: {
      type: String,
    },
    status: {
      type: String,
    }
  },
  
);
autoIncrement.initialize(mongoose.connection);
classroomSchema.plugin(autoIncrement.plugin, "Classroom");
const Classroom = mongoose.model("Classroom", classroomSchema);
module.exports = Classroom;
