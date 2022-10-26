const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const { ensureAuth } = require("../middleware/auth");
const swaggerDocument = require("../swagger.json");

router.use("/api-docs", ensureAuth, swaggerUi.serve);
router.use("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = router;
