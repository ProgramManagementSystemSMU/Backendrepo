const mongoose = require ('mongoose');

const BookingformSchema = new mongoose.Schema({
 fullName :{type: String, required:true },

 ID:{type: String, required:true },
 email:{ type: String, required: true},

 date:{ type: Date, default: Date.now},
 time: {type:Number},
 duration:{type: Number} 

})
const Bookingform = mongoose.model("Bookingform", BookingformSchema);
module.exports=Bookingform;