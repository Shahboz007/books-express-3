const { Router } = require("express");
const path = require('path')

// Router
const router = Router();

// view path
const viewsPath = path.join(__dirname, '..', 'views/books')

router.get('/', (req,res) => {
  res.sendFile(path.join(viewsPath, 'books.html'))
})

module.exports = router;
