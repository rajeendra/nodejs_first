const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("It works!");
});

router.get("/login", (req, res) => {
  res.send("It works!, login route");
});

module.exports = router;
