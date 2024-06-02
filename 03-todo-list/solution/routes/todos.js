const express = require("express");
const router = express.Router();

const {
  getAll,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos");

router.route("/").get(getAll).post(createTodo);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;
