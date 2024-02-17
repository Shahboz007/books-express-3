const { Router } = require("express");
const path = require("path");
const { getAllBooks, getOneBook, addBook } = require("../modules/books");

// Router
const router = Router();

// index
router.get("/", getAllBooks);

// show
router.get("/:bookId", getOneBook);

// add
router.post("/", addBook);

module.exports = router;
