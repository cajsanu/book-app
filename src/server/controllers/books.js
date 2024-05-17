const router = require("express").Router();
const { sequelize } = require("../utils/db");
const { Book } = require("../models/Book");

router.get("/", async (req, res) => {
  const books = await Book.findAll({});
  res.json(JSON.stringify(books));
});

router.get("/:id", async (req,res) => {
    try {
        const book = await Book.findByPk(req.params.id)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
