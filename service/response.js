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

// created
function createdRes(res, { message = "Book created successfully", data = {} }) {
  res.status(201);
  res.contentType(contentType);
  res.send({
    success: true,
    message,
    data,
  });
}

// not found
function notFoundRes(res, { message = "Not Found" }) {
  res.status(404);
  res.contentType(contentType);
  res.send({
    success: false,
    message,
  });
}

// Exists res
function alreadyExistsRes(res, { message = "Already exists" }) {
  res.status(400);
  res.contentType(contentType);
  res.send({
    success: false,
    message,
  });
}

// server error
function serverErrorRes(res, err) {
  res.status(500);
  res.contentType(contentType);
  res.send({
    success: false,
    message: "Internal Server Error",
    data: err,
  });
}

module.exports = {
  successRes,
  notFoundRes,
  alreadyExistsRes,
  serverErrorRes,
};
