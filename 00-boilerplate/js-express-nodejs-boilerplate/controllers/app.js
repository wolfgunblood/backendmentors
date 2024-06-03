const GET = (req, res) => {
  return res.status(200).json({ msg: "GET ROUTE !!" });
};
const POST = (req, res) => {
  return res.status(200).json({ msg: "POST ROUTE !!" });
};
const DELETE = (req, res) => {
  return res.status(200).json({ msg: "DELETE ROUTE !!" });
};
const PATCH = (req, res) => {
  return res.status(200).json({ msg: "PATCH ROUTE !!" });
};

module.exports = { GET, POST, DELETE, PATCH };
