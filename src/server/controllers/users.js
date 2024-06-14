const router = require("express").Router();
const { sequelize } = require("../utils/db");
const { User, Book } = require("../models/");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const users = await User.findAll({
    include: {
      model: Book,
      attributes: { exclude: ["userId"] },
    },
  });
  res.json(users);
});

router.post("/", async (req, res, next) => {
  if (req.body.password.length < 10) {
    return res
      .status(400)
      .json({ error: "password must be more than 10 characters" });
  }
  try {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = await User.create({
      name: req.body.name,
      username: req.body.username,
      age: req.body.age,
      password: passwordHash,
    });
    return res.json(newUser);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        {
          model: Book,
          as: "read_books",
          attributes: { exclude: ["userId"] },
        },
        {
          model: Book,
          as: "marked_books",
          attributes: { exclude: ["userId"] },
        },
      ],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
