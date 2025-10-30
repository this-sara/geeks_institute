import express from "express";
import router from "./routes/index.js";
import todoRouter from "./routes/todo.js";
import booksRouter from "./routes/books.js";



const app = express();
app.use(express.json());
const PORT = 3000;

// Mount router
app.use("/", router);

// Use todo routes
app.use("/todos", todoRouter);

// Use book routes
app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


