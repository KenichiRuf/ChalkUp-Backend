const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

server.get("/", (req, res) => {
  res.send("Backend API for ChalkUp");
});

module.exports = server;
