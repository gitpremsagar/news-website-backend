require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Working!");
});

const port = process.env.PORT || process.env.LOCALHOST_PORT;

app.listen(3012, () => {
  console.log(`Server is running on port ${port}`);
});
