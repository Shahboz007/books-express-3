const { Router } = require("express");
const path = require("path");
const {
  getAllBooks,
  getOneBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../modules/books");

// Router
const router = Router();

// index
router.get("/", getAllBooks);

// show
router.get("/:bookId", getOneBook);

// add
router.post("/", addBook);

// update
router.put("/:bookId", updateBook);

// delete
router.delete("/:bookId", deleteBook)

module.exports = router;
