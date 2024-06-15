const router = require("express").Router();
const { sequelize } = require("../utils/db");
const { Book, User, Review } = require("../models");
const { tokenExtractor } = require("../utils/middleware");
const { Sequelize } = require("sequelize");

router.get("/", async (req, res) => {
  const search = req.query.search;

  if (search && search.length > 2) {
    const books = await Book.findAll({
      where: {
        [Sequelize.Op.or]: [
          {
            title: {
              [Sequelize.Op.iLike]: `${search}%`,
            },
          },
          {
            title: {
              [Sequelize.Op.iLike]: `% ${search}%`,
            },
          },
        ],
      },
      group: ["book.id"],
      order: [[Sequelize.fn("min", Sequelize.col("title"))]],
      limit: 100,
    });
    return res.json(books);
  } else {
    const books = await Book.findAll({
      group: ["book.id", "reviewed_books.id"],
      order: [[Sequelize.fn("min", Sequelize.col("title"))]],
      include: [
        {
          model: Review,
          as: "reviewed_books",
        },
      ],
    });
    res.json(books);
  }
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
    const book = !bookExists
      ? await Book.create({
          title: newBook.title,
          author: newBook.author,
          year: newBook.year,
        })
      : bookExists;

    const review = await Review.upsert(
      {
        userId: user.id,
        bookId: book.id,
        rating: newBook.rating,
        comment: newBook.comment,
      },
      {
        conflictFields: ["user_id", "book_id"],
      }
    );

    return res.json(book.toJSON());
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", tokenExtractor, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id, {
      attributes: {
        exclude: ["password"],
      },
    });
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

module.exports = router;
