const router = require("express").Router();
const Classroom = require("../models/classroom");

router.post("/api/addclassroom", async (req, res) => {
  const classroomId = req.body.Id;
  const classroomlocation = req.body.location;

  const classroom = new  Classroom({
    Id: boxId,
    location: boxlocation,
    
  });

  try {
    await box.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/getclassroom", async (req, res) => {
  box.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

module.exports = router;