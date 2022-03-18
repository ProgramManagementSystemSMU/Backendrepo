const router = require("express").Router();
const Box = require("../models/Box");

router.post("/api/addbox", async (req, res) => {
  const boxId = req.body.Id;
  const boxlocation = req.body.location;

  const box = new  Box({
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

router.get("/api/getbox", async (req, res) => {
  box.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

module.exports = router;