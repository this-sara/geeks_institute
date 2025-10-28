import express from "express";
import mongoose from "mongoose"
const app = express();
const mongoose=
app.use(express.json());


// ✅ Read all books
app.get("/", (req, res) => {
  res.send('Hello World!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`client running on port ${PORT}`));
