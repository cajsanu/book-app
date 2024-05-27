const router = require("express").Router();
const { sequelize } = require("../utils/db");
const { Book } = require("../models");

router.get("/", async (req, res) => {
  const books = await Book.findAll({});
  res.json(JSON.stringify(books));
});

router.get("/:userId", async (req, res) => {
  try {
    const books = await Book.findAll({ where: { userId: req.params.userId } });
    res.json(JSON.stringify(books));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
