const router = require("express").Router();
const { ReadBooksList, User } = require("../models");
const { tokenExtractor } = require("../utils/middleware");

router.post("/", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const { userId, bookId } = req.body;
    if (user.id === userId) {
      const markBook = await ReadBooksList.create({
        userId,
        bookId,
      });
      res.json(markBook);
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
