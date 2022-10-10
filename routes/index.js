const express = require("express");
const router = express.Router();

router.use("/", require("./swagger.js"));
router.use("/books", require("./books"));

module.exports = router;

// routes.get("/", (req, res) => {
//   res.send("Hello Sarah!!!");
// });
