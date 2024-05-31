const axios = require('axios')

const asyncWrapper = require("../middleware/async");
const getAdvice = asyncWrapper(async (req, res) => {
  
  const response = await axios.get("https://api.adviceslip.com/advice")
  const data = await response.data.slip
  return res.status(200).json(data)
});

module.exports = { getAdvice };
