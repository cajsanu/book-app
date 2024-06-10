const router = require("express").Router();
const { ActiveToken } = require("../models");
const { tokenExtractor } = require("../utils/middleware");

router.delete("/", tokenExtractor, async (req, res) => {
  try {
    res.clearCookie("token", { path: "/" });
    const activeToken = await ActiveToken.findOne({
      where: {
        activeToken: req.activeToken,
      },
    });
    await activeToken.destroy();
    res.send("Successfully logged out");
  } catch (error) {
    res.send({ error: "Something went wrong" });
  }
});

module.exports = router;
