import Post from "../models/postModel.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des posts" });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.getById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post non trouvé" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.create({ title, content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du post" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updated = await Post.update(req.params.id, { title, content });
    if (!updated.length) return res.status(404).json({ error: "Post non trouvé" });
    res.json(updated[0]);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour du post" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deleted = await Post.delete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Post non trouvé" });
    res.json({ message: "Post supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression du post" });
  }
};
