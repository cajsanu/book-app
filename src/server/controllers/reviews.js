const router = require("express").Router();
const { Review, User, Book } = require("../models");
const { tokenExtractor } = require("../utils/middleware");

router.get("/", async (req, res, next) => {
  try {
    const readBooks = await Review.findAll({});
    return res.json(readBooks);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id);
    const reviews = await Review.findAll({
      where: {
        bookId: req.params.id,
      },
    });

    return res.json({ book, reviews });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", tokenExtractor, async (req, res, next) => {
  console.log(req.params.id)
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const review = await Review.findByPk(req.params.id);
    if (user.id === review.userId) {
      await review.update({ comment: req.body.comment });
    }
    return res.json("Comment updated");
  } catch (err) {
    next(err);
  }
});

router.post("/", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const { userId, bookId, rating, comment } = req.body;
    if (user.id === userId) {
      const readBook = await Review.create({
        userId,
        bookId,
        rating,
        comment,
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
    const review = await Review.findByPk(req.params.id);
    if (review.userId === user.id) {
      await review.destroy();
    } else {
      return res.status(401).json({ error: "Action not permitted" });
    }
    return res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
