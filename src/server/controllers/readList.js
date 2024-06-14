const router = require("express").Router();
const { ReadBooksList, User, Book } = require("../models");
const { tokenExtractor } = require("../utils/middleware");

router.get("/", async (req, res, next) => {
  try {
    const readBooks = await ReadBooksList.findAll({});
    return res.json(readBooks);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const book = await ReadBooksList.findAll({
      where: {
        bookId: req.params.id,
      },
      include: [
        {
          model: Book,
          as: "book",
        },
      ],
    });
    return res.json(book);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const book = await ReadBooksList.findOne({
      where: { userId: user.id, bookId: req.params.id },
    });
    console.log(user, book, "!!!!!");
    await ReadBooksList.update({comment: req.body.comment}, {  where: { userId: user.id, bookId: req.params.id } });
    return res.json("Comment updated");
  } catch (err) {
    next(err);
  }
});

router.post("/", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const { userId, bookId } = req.body;
    if (user.id === userId) {
      const readBook = await ReadBooksList.create({
        userId,
        bookId,
      });
      res.json(readBook);
    } else {
      res.json("Unknown user");
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const book = await ReadBooksList.findByPk(req.params.id);
    if (book.userId === user.id) {
      await book.destroy();
    } else {
      return res.status(401).json({ error: "Action not permitted" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
