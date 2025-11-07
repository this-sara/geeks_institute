// server/controllers/bookController.js
import books from "../models/bookModel.js";

// 📘 Lire tous les livres
export const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// 📖 Lire un livre par ID
export const getBookById = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
};

// ➕ Créer un nouveau livre
export const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
};
