const { CustomAPIError } = require("../error/error");

const errorHandleMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    console.log("CUSTOM API ERROR", err);
    res.status(err.statusCode).json({ msg: err.message });
  }

  console.log("INTERNAL SERVER ERROR", err);
  res.status(500).send("something went wrong");
};

module.exports = errorHandleMiddleware;
