const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

//const routeRouter = require("./routes/routeRouter");
const authRouter = require("./auth/authRouter");

server.use("/api/auth", authRouter);
//server.use("/api/routes", routeRouter);

server.get("/", (req, res) => {
  res.send("Backend API for ChalkUp");
});

module.exports = server;
