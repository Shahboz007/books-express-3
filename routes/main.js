const { Router } = require("express");
const path = require("path");

// Router
const router = Router();

// views path
const viewsPath = path.join(__dirname,"..", "views");

router.get("/", (req, res) => {
  res.send('Home')
});

module.exports = router;
