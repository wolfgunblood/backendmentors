const asyncWrapper = require("../middleware/async");
const { BadRequestError } = require("../error");
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid'); // Import the function to generate UUIDs


const login = asyncWrapper(async (req, res) => {
  const { username, password } = await req.body;

  if (!username && !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const id = uuidv4();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  return res.status(200).json({ msg: "user created", token });
});

module.exports = { login };
