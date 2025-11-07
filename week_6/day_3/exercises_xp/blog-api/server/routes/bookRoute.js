// server/routes/bookRoutes.js
import express from "express";
import { getAllBooks, getBookById, createBook } from "../controllers/bookController.js";

const router = express.Router();

// Routes CRUD
router.get("/", getAllBooks);        // Read all
router.get("/:bookId", getBookById); // Read by ID
router.post("/", createBook);        // Create

export default router;
