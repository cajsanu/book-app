const router = require("express").Router();
const { sequelize } = require("../utils/db");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET } = require("../utils/config");

router.post("/", async (request, response) => {
  const { username, password } = request.body;

  const user = await User.findOne({
    where: {
      username: username,
    },
  });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    username: user.username,
    id: user.id,
  };

  const token = jwt.sign(userForToken, SECRET, { expiresIn: 60 * 60 });

  response
    .status(200)
    .send({ token, username: user.username, name: user.name });
});

module.exports = router;
