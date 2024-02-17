const { readFile, writeFile } = require("../service/file");
const path = require("path");

const {
  successRes,
  serverErrorRes,
  notFoundRes,
  alreadyExistsRes,
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
  const { title, author } = req.body;
  readFile(FILE_PATH)
    .then((books) => {
      const index = books.findIndex((item) => item.title === title);
      // validate existing
      if (index === -1) {
        // Add new books
        const newBook = {
          id: books.length + 1,
          title,
          author,
        };
        books.push(newBook);

        // write file
        writeFile(FILE_PATH, books)
          .then(() => {
            return successRes(res, { data: newBook });
          })
          .catch((err) => {
            return serverErrorRes(res, err);
          });
      } else {
        return alreadyExistsRes(res, {
          message: `This "${title}" book already exists`,
        });
      }
    })
    .catch((err) => serverErrorRes(res, err));
}

module.exports = {
  getAllBooks,
  getOneBook,
  addBook,
};
