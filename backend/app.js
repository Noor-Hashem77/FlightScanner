const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.get("/", (req, res, err) => {
  // in here I want to send an axios request to a flight website and do the logic to get the cheapest flight and its information
  // in order to send back to the fonrt end to display
});

app.listen(3001, () => {
  console.log(`App listening on port 3001`);
});
