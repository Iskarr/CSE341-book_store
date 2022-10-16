const validator = require("./validate");

const saveBook = (req, res, next) => {
  const validationRule = {
    bookTitle: "required|string",
    authorName: "required|string",
    bookPrice: "required|string",
    bookEdition: "required|string",
    publishYear: "required|string",
    pageNumber: "required|string",
    BookGenre: "required",
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation error",
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveBook,
};
