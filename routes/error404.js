const {Router} = require('express')
const path = require('path')

// Router
const router = Router();

// views path
const viewsPath = path.join(__dirname, '..','views/errors');

router.all('*',(req, res) => {
  res.status(404).sendFile(path.join(viewsPath,'404.html'))
})

module.exports = router