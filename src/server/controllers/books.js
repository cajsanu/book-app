const router = require("express").Router();
const { sequelize } = require("../utils/db");
const { Book } = require("../models");
const { tokenExtractor } = require("../utils/middleware");

router.get("/", async (req, res) => {
  const books = await Book.findAll({});
  res.json(books);
});

router.post("/", tokenExtractor, async (req, res) => {
  try {
    const userId = req.decodedToken.id
    const newBook = { ...req.body, userId };
    console.log(newBook);
    const book = await Book.create(newBook);
    return res.json(book.toJSON());
  } catch (err) {
    console.log(err);
  }
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
