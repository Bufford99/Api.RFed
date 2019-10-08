const mongoose = require("mongoose");
const ParkingSchema = mongoose.model("Parking");

module.exports = app => {
  // Adding one parking space
  app.post("/parking", async (req, res) => {
    console.log(req.body);

    try {
      const addData = new ParkingSchema({
        isOpen: req.body.isOpen
      });

      await addData.save();

      return res.json({
        msg: "saved"
      });
    } catch (error) {
      console.log(err);
      return res.status(404).json({ error });
    }
  });

  app.get("/parking", async (req, res) => {
    try {
      const array = [];
      const response = await ParkingSchema.find();

      response.map(doc => {
        array.push(doc);
      });

      return res.json(array);
    } catch (error) {
      console.log(err);
      return res.status(404).json({ error });
    }
  });
  app.put("/api/parking/{id}", async (req, res) => {
    try {
      const response = await ParkingSchema.findById(req.params.id);
      await response.update({ isOpen: !isOpen });
      return res.status(200).json({ msg: "Switched" });
    } catch (err) {
      console.log(err);
      return res.status(404).json({ err });
    }
  });
};
