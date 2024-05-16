const requestRouter = require("express").Router();

requestRouter.get("/", (req, res) => {
  res.json("pong");
});

module.exports = requestRouter;
