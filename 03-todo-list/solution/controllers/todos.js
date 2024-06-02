const asyncWrapper = require("../middleware/async");
const Todo = require("../models/todos");
const { createCustomError } = require("../error/error");
const getAll = asyncWrapper(async (req, res) => {
  const todos = await Todo.find({});
  return res.status(200).json({ todos });
});
const createTodo = asyncWrapper(async (req, res) => {
  const todo = await Todo.create(req.body);
  return res.status(200).json({ todo });
});

const getTodo = asyncWrapper(async (req, res, next) => {
  const { id: todoId } = req.params;
  const todo = await Todo.findOne({ _id: todoId });

  if (!todo) {
    return next(createCustomError(`No todo with ID ${todoId}`, 404));
  }
  return res.status(200).json({ todo });
});

const updateTodo = asyncWrapper(async (req, res, next) => {
  const { id: todoID } = req.params;

  const todo = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!todo) {
    return next(createCustomError(`No todo with id : ${todoID}`, 404));
  }

  return res.status(200).json({ todo });
});

const deleteTodo = asyncWrapper(async (req, res, next) => {
  const { id: todoId } = req.params;
  const todo = await Todo.findOne({ _id: todoId });

  if (!todo) {
    return next(createCustomError(`No todo with ID ${todoId}`, 404));
  }
  todo = await Todo.deleteOne({ _id: todoId });
  return res.status(200).send("todo deleted!!!");
});

module.exports = { getAll, createTodo, getTodo, deleteTodo, updateTodo };
