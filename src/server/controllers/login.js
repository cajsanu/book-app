const router = require("express").Router();
const { sequelize } = require("../utils/db");
const { User, ActiveToken } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET } = require("../utils/config");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.password);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: "invalid username or password",
      });
    }

    const userForToken = {
      username: user.username,
      id: user.id,
    };

    const token = jwt.sign(userForToken, SECRET, { expiresIn: 60 * 60 });

    await ActiveToken.create({
      userId: user.id,
      activeToken: token,
    });

    res
      .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
      .status(200)
      .json({id: user.id});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
