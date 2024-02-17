const {Router} = require('express')
const path = require('path');
const { notFoundRes } = require('../service/response');

// Router
const router = Router();

// views path
const viewsPath = path.join(__dirname, '..','views/errors');

router.all('*',(req, res) => {
  res.status(404).send(notFoundRes(res,{message:'Page not found'}))
})

module.exports = router