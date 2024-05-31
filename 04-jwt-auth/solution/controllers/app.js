const asyncWrapper = require("../middleware/async");
const { BadRequestError } = require("../error");
const login = asyncWrapper(async (req, res) => {

  throw new BadRequestError("Please provide email and password");

  return res.status(200).json({ msg: "Yahallo World!!!" });
});

module.exports = { login };
