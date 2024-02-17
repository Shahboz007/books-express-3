const { Router } = require("express");
const path = require("path");
const { getAllBooks, getOneBook } = require("../modules/books");

// Router
const router = Router();

// index 
router.get("/", getAllBooks);

// show
router.get('/:bookId', getOneBook)

// add 
router.get("/add", (req, res) => {
  res.send("book");
});

module.exports = router;
