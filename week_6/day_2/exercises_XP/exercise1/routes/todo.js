import express from "express";
const router = express.Router();

let todos = []; // our in-memory database

// 🟢 Get all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// 🟢 Add a new todo
router.post("/", (req, res) => {
  const newTodo = { id: Date.now(), task: req.body.task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 🟡 Update a todo by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).send("Todo not found");
  todos[index].task = req.body.task;
  res.json(todos[index]);
});

// 🔴 Delete a todo by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.sendStatus(204);
});

export default router;
