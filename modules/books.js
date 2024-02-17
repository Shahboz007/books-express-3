const { readFile } = require("../service/file");
const path = require("path");

const { successRes, serverErrorRes } = require("../service/response");

const FILE_PATH = path.join(__dirname, "..", "data", "books.json");

// index
function getAllBooks(req, res) {
  console.log('getAllBooks')
  readFile(FILE_PATH)
    .then((data) => {
      return successRes(res, { data });
    })
    .catch((err) => {
      return serverErrorRes(res, err);
    });
}

module.exports = {
  getAllBooks,
};
