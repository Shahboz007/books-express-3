const contentType = "application/json";

// success
function successRes(res, { message = "Muvaffaqiyatli", data = null }) {
  res.status(200);
  res.contentType(contentType);
  res.send({
    success: true,
    message,
    data,
  });
}

// server error
function serverErrorRes(res, res) {
  res.writeHead(500, contentType);
  res.send({
    success: false,
    message: "Internal Server Error",
    data: err,
  });
}

module.exports = {
  successRes,
  serverErrorRes,
};
