const express = require("express");
const path = require('path')

// app
const app = express();

/* CONFIGURATION */
app.use(express.json());
app.use(express.urlencoded())
// static folder
app.use(express.static(path.join(__dirname,'public')))

// routes
const mainRoutes = require("./routes/main");
const booksRoutes = require("./routes/books");
const error404Routes = require("./routes/error404");


// all routes
app.use("/books", booksRoutes);
app.use(mainRoutes);
// not found
app.use(error404Routes);

// port
const PORT = process.env.PORT || 3000;

// listen
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
