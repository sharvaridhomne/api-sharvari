const express = require("express");

const server = express();

const PORT = process.env.PORT || 3000;

server.get("/", (req, res) => {
  res.send("Hello! I'm Sharvari.");
});

server.listen(PORT, () => {
  console.log("Server listening on port " + PORT + "...");
});
