const mongodb = require("../database/connect");
const ObjectId = require("mongodb").ObjectId;

// CREATE book
const createBook = async (req, res) => {
  try {
    const book = {
      bookTitle: req.body.bookTitle,
      authorName: req.body.authorName,
      bookPrice: req.body.bookPrice,
      bookEdition: req.body.bookEdition,
      publishYear: req.body.publishYear,
      pageNumber: req.body.pageNumber,
      BookGenre: req.body.BookGenre,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("books")
      .insertOne(book);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the contact."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE book
const updateBook = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const book = {
      bookTitle: req.body.bookTitle,
      authorName: req.body.authorName,
      bookPrice: req.body.bookPrice,
      bookEdition: req.body.bookEdition,
      publishYear: req.body.publishYear,
      pageNumber: req.body.pageNumber,
      BookGenre: req.body.BookGenre,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("books")
      .replaceOne({ _id: userId }, book);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while updating the contact."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE book
const deleteBook = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection("books")
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while deleting the contact."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET all books
const getAllBooks = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("books").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET single contact
const getSingleBook = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("books")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
