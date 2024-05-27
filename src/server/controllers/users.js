const router = require("express").Router();
const { sequelize } = require("../utils/db");
const { User, Book } = require("../models/");

router.get("/", async (req, res) => {
  const users = await User.findAll({
    include: {
      model: Book,
      attributes: { exclude: ["userId"] },
    },
  });
  res.json(users);
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        {
          model: Book,
          attributes: { exclude: ["userId"] },
        },
      ],
    });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
