const router = require("express").Router();
const { sequelize } = require("../utils/db");
const { Book } = require("../models");

router.get("/", async (req, res) => {
  const books = await Book.findAll({});
  res.json(books);
});

router.get("/:id", async (req, res) => {
  try {
    const books = await Book.findByPk(req.params.id);
    res.json(books);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
