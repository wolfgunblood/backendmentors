const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../error");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
    console.log(authHeader)
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return next(new UnauthenticatedError("No token provided"));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, username: decoded.username };
    next();
  } catch (error) {
    next(new UnauthenticatedError("Not authorized to access this route"));
  }
};

module.exports = authenticationMiddleware;
