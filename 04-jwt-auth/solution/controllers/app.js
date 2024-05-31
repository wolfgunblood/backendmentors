const asyncWrapper = require("../middleware/async");
const login = asyncWrapper(async (req, res) => {
  
  return res.status(200).json({ msg: "Yahallo World!!!" });
});

module.exports = { login };
