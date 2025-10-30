import express from "express";
const router = express.Router();

let books = [];

// Get all books
router.get("/", (req, res) => {
  res.json(books);
});

// Add a new book
router.post("/", (req, res) => {
  const newBook = { id: Date.now(), title: req.body.title, author: req.body.author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).send("Book not found");
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});

// Delete a book by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.sendStatus(204);
});

export default router;
