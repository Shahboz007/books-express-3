const { readFile } = require("../service/file");
const path = require("path");

const {
  successRes,
  serverErrorRes,
  notFoundRes,
} = require("../service/response");

const FILE_PATH = path.join(__dirname, "..", "data", "books.json");

// index
function getAllBooks(req, res) {
  readFile(FILE_PATH)
    .then((data) => {
      return successRes(res, { data });
    })
    .catch((err) => {
      return serverErrorRes(res, err);
    });
}

// show
function getOneBook(req, res) {
  const { bookId } = req.params;
  readFile(FILE_PATH)
    .then((books) => {
      const index = books.findIndex((item) => item.id);
      if (index !== -1) return successRes(res, { data: books[index] });
      return notFoundRes(res, { message: `This ${bookId} not found` });
    })
    .catch((err) => serverErrorRes(res, err));
}

// add
function addBook(req, res) {
  console.log(req);
  return;

  readFile(FILE_PATH)
    .then((books) => {
      // const index = books.findIndex(item => item.title === )
    })
    .catch((err) => serverErrorRes(err));
}

module.exports = {
  getAllBooks,
  getOneBook,
};
