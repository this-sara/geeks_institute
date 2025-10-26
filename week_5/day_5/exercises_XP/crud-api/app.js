import express from "express";
import { fetchPosts } from "./data/dataService.js";

const app = express();
const PORT = 5000;

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("✅ Data successfully retrieved from JSONPlaceholder");
    res.json(posts);
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

app.listen(PORT, () => console.log(`🚀 CRUD API running on port ${PORT}`));


// Get one post by ID
app.get("/api/posts/:id", async (req, res) => {
  try {
    const posts = await fetchPosts();
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    console.error("❌ Error fetching post:", error.message);
    res.status(500).json({ message: "Failed to fetch post" });
  }
});
