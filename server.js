// server.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/lecture-scheduling", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// routes and middleware here

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
