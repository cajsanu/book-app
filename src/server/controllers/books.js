const router = require("express").Router();
const { sequelize } = require("../utils/db");
const { Book, User, ReadBooksList } = require("../models");
const { tokenExtractor } = require("../utils/middleware");
const { Sequelize } = require("sequelize");

router.get("/", async (req, res) => {
  const books = await Book.findAll({
    group: ["book.id"],
    order: [[Sequelize.fn("max", Sequelize.col("rating")), "DESC"]],
  });
  res.json(books);
});

router.post("/", tokenExtractor, async (req, res, next) => {
  try {
    const newBook = { ...req.body };
    const user = await User.findByPk(req.decodedToken.id);
    const bookExists = await Book.findOne({
      where: {
        title: newBook.title,
        author: newBook.author,
        year: newBook.year,
      },
    });
    const book = !bookExists ? await Book.create(newBook) : bookExists;
    const read = await ReadBooksList.create({
      userId: user.id,
      bookId: book.id,
    });
    return res.json(book.toJSON());
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const book = await Book.findByPk(req.params.id);
    if (book.userId === user.id) {
      await book.destroy();
    } else {
      return res.status(401).json({ error: "Action not permitted" });
    }
    return res.status(204).end();
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id);
    return res.json(book);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const book = await Book.findByPk(req.params.id);
    if (user.id === book.userId) {
      await Book.update({ ...req.body }, { where: { id: req.params.id } });
      return res.json("Comment updated");
    } else {
      return res.status(401).json({ error: "Action not permitted" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
