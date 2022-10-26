const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.use("/", require("./swagger.js"));
router.use("/books", require("./books"));

// @desc Login/Landing page
// @route GET /
router.get("/", ensureGuest, (req, res) => {
  res.render("login", { layout: "login" });
});

// @desc Dashboard
// @route GET /dashboard
router.get("/Dashboard", ensureAuth, (req, res) => {
  res.render("dashboard", {
    name: req.user.firstName,
  });
});

module.exports = router;
