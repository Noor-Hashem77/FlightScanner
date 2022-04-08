const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/topten", async (req, res, err) => {
  // in here I want to send an axios request to a flight website and do the logic to get the cheapest flight and its information
  // in order to send back to the fonrt end to display

  const { leavingFrom, goingTo, departDate, returnDate } = req.body;
  res.send([leavingFrom, goingTo, departDate, returnDate]);
});

app.listen(3001, () => {
  console.log(`App listening on port 3001`);
});
