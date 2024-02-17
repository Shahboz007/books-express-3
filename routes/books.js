const { Router } = require("express");
const path = require('path')

// Router
const router = Router();

// view path
const viewsPath = path.join(__dirname, '..', 'views/books')

// index page
router.get('/', (req,res) => {
  res.sendFile(path.join(viewsPath, 'books.html'))
})

// add page
router.get('/add', (req,res) => {
  res.sendFile(path.join(viewsPath, 'books-add.html'))
})

module.exports = router;
