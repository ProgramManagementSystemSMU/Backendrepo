
const express = require ('express');
const user = require("../models/User");

router.post("/api/addusers", async (req, res) => {
 const userID = req.body.userID;
 const userfullName = req.body.fullName;
 const useremail = req.body.useremail;
 const userdate = req.body.userdate;
 const usertime = req.body.usertime;
 const userduration = req.body.userduration;


 
 const user = new Bookingform({
   Id: BookingformId,
   Name: BookingformfullName,
   Email: BookingformEmail,
   time: Bookingformtime,
   duration: Bookingformduration,
 });

 try {
   await user.save();
   res.send("inserted data");
 } catch (err) {
   console.log(err);
 }
});

module.exports = router;