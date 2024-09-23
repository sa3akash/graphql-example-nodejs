const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connectDB } = require("./db/connect");
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
