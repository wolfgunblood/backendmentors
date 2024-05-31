const asyncWrapper = require("../middleware/async");
const getAdvice = asyncWrapper(async (req, res) => {
  res.status(200).send("get all advice");
});

module.exports = { getAdvice };
