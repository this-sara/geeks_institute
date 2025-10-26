import express from "express";

const app = express();
app.use(express.json());

// Fake database
let posts = [
  { id: 1, title: "First Post", content: "Hello, this is my first post!" },
  { id: 2, title: "Second Post", content: "Another day, another post." },
];

// ✅ GET all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// ✅ GET a post by ID
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// ✅ CREATE a new post
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// ✅ UPDATE a post
app.put("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  res.json(post);
});

// ✅ DELETE a post
app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  posts.splice(index, 1);
  res.json({ message: "Post deleted successfully" });
});

// ❌ Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
