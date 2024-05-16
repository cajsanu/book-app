const requestRouter = require("express").Router();

requestRouter.get("/", (req, res) => {
  res.json("Hi there");
});

module.exports = requestRouter;
