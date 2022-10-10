const express = require("express");
const router = express.Router();

const BooksController = require("../controller/books");

router.get("/", BooksController.getAllBooks);
router.get("/:id", BooksController.getSingleBook);
router.post("/", BooksController.createBook);
router.put("/:id", BooksController.updateBook);
router.delete("/:id", BooksController.deleteBook);

module.exports = router;
