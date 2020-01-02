const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

server.get("/", (req, res) => {
  res.send("This is working");
});

module.exports = server;
