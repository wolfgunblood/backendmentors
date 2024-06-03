// Handle GET requests
const GET = (req, res) => {
  // Send a status of 200 (OK) and a JSON object as a response
  return res.status(200).json({ msg: "GET ROUTE !!" });
};

// Handle POST requests
const POST = (req, res) => {
  return res.status(200).json({ msg: "POST ROUTE !!" });
};

// Handle DELETE requests
const DELETE = (req, res) => {
  return res.status(200).json({ msg: "DELETE ROUTE !!" });
};

// Handle PATCH requests
const PATCH = (req, res) => {
  return res.status(200).json({ msg: "PATCH ROUTE !!" });
};

// Export the route handlers to be used in other parts of the application
module.exports = { GET, POST, DELETE, PATCH };
