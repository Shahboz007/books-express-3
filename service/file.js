const fs = require("fs");

// read
async function readFile(FILE_PATH) {
  return await new Promise((resolve, rejects) => {
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
      if (err) rejects(err);
      else resolve(JSON.parse(data));
    });
  });
}

// write
async function writeFile(FILE_PATH, data) {
  return await new Promise((resolve, rejects) => {
    fs.writeFile(FILE_PATH, data, (err) => {
      if (err) rejects(err);
      else resolve();
    });
  });
}

module.exports = {
  readFile,
  writeFile,
};
