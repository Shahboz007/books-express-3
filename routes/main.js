const { Router } = require("express");
const path = require("path");

// Router
const router = Router();

// views path
const viewsPath = path.join(__dirname,"..", "views");

router.get("/", (req, res) => {
  res.sendFile(path.join(viewsPath, "main.html"));
});

module.exports = router;
