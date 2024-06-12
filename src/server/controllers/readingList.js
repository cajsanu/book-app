const router = require("express").Router();
const { UserReadingList, User } = require("../models");
const { tokenExtractor } = require("../utils/middleware");

router.post("/", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const { userId, blogId } = req.body;
    if (user.id === userId) {
      const markBook = await UserReadingList.create({
        userId,
        blogId,
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
