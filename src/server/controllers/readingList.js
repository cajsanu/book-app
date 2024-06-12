const router = require("express").Router();
const { UserReadingList, User, Book } = require("../models");
const { tokenExtractor } = require("../utils/middleware");

router.post("/", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const { userId, bookId } = req.body;
    if (user.id === userId) {
      const markBook = await UserReadingList.create({
        userId,
        bookId,
      });
      res.json(markBook);
    } else {
        res.json("Unknown user")
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
