const express = require("express");
const router = express.Router();

const BooksController = require("../controller/books");
const validation = require("../middleware/validation-middleware");

router.get("/", BooksController.getAllBooks);
router.get("/:id", BooksController.getSingleBook);
router.post("/", validation.saveBook, BooksController.createBook);
router.put("/:id", validation.saveBook, BooksController.updateBook);
router.delete("/:id", BooksController.deleteBook);

module.exports = router;
