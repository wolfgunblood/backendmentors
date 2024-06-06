const asyncWrapper = require("../middleware/async");
const { BadRequestError } = require("../error");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid"); // Import the function to generate UUIDs

const login = asyncWrapper(async (req, res) => {
  const { username, password } = await req.body;

  if (!username && !password) {
    throw new BadRequestError("Please provide username and password");
  }

  const id = uuidv4();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  return res.status(200).json({ msg: "user created", token });
});

const dashboard = async (req, res) => {
  const { user } = req; // Assuming user details are attached in the auth middleware
  console.log(user);
  if (user) {
    res.status(200).json({
      msg: `Hello, ${user.username}. Your id is: ${user.id}.`,
    });
  } else {
    res.status(401).json({
      msg: "User data not found",
    });
  }
};

module.exports = { login, dashboard };
