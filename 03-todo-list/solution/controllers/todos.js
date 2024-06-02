const asyncWrapper = require('../middleware/async')

const getAll = asyncWrapper(async (req, res) => {
  res.status(200).json({ msg: "Yahallo World!!!" });
});

module.exports = { getAll };
