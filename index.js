const express = require("express");

// app
const app = express();

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
