const fs = require("fs");

// read
async function readFile(FILE_PATH) {
  return await new Promise((resolve, reject) => {
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
}

// write
async function writeFile(FILE_PATH, data) {
  return await new Promise((resolve, reject) => {
    fs.writeFile(FILE_PATH, data, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

module.exports = {
  readFile,
  writeFile,
};
