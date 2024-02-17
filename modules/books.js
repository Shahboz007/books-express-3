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

// update
function updateBook(req, res) {
  const { bookId } = req.params;
  const { title, author } = req.body;

  readFile(FILE_PATH)
    .then((books) => {
      const index = books.findIndex((item) => item.id.toString() === bookId);
      if (index !== -1) {
        const existingTitleIndex = books.findIndex(
          (book) => book.title === title
        );
        if (existingTitleIndex === -1) {
          // update data
          const updatedBook = { id: books[index].id, title, author };
          books[index] = updatedBook;

          // delete return id
          delete updateBook.id;

          // write file
          writeFile(FILE_PATH, books)
            .then(() =>
              successRes(res, {
                message: "Updated successfully",
                data: updateBook,
              })
            )
            .catch((err) => serverErrorRes(res, err));
        } else {
          return alreadyExistsRes(res, {
            message: `This "${title}" book already exists`,
          });
        }
      } else {
        return notFoundRes(res, { message: `This book "${bookId}" not found` });
      }
    })
    .catch((err) => {
      return serverErrorRes(res, err);
    });
}

// delete
function deleteBook(req, res) {
  const { bookId } = req.params;

  readFile(FILE_PATH)
    .then((books) => {
      const index = books.findIndex((book) => book.id.toString() === bookId);

      if (index !== -1) {
        // return data
        const deleteBook = books[index];
        delete deleteBook.id

        // write data
        const filterBooks = books.slice(index, 1);

        // write
        writeFile(FILE_PATH, filterBooks).then(() =>
          successRes(res, {
            message: `Deleted book successfully`,
            data: deleteBook,
          })
        );
      } else {
        return notFoundRes(res, { message: `This book "${bookId}" not found` });
      }
    })
    .catch((err) => serverErrorRes(res, err));
}

module.exports = {
  getAllBooks,
  getOneBook,
  addBook,
  updateBook,
  deleteBook
};
