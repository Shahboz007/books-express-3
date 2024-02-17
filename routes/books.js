const { Router } = require("express");
const path = require("path");
const { getAllBooks } = require("../modules/books");

// Router
const router = Router();

// index page
router.get("/", getAllBooks);

// add page
router.get("/add", (req, res) => {
  res.send("book");
});

module.exports = router;
