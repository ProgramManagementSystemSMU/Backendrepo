const mongoose = require("mongoose");

const BoxSchema = new mongoose.Schema({
 Id: {
  type: String,
},
  location: {
    type: String,
  },
});

const Box = mongoose.model("Box", BoxSchema);
module.exports = Box;
