import db from "../config/db.js";

const Post = {
  // Récupérer tous les posts
  async getAll() {
    return await db("posts").select("*");
  },

  // Récupérer un post par ID
  async getById(id) {
    return await db("posts").where({ id }).first();
  },

  // Créer un nouveau post
  async create(data) {
    return await db("posts").insert(data).returning("*");
  },

  // Mettre à jour un post
  async update(id, data) {
    return await db("posts").where({ id }).update(data).returning("*");
  },

  // Supprimer un post
  async delete(id) {
    return await db("posts").where({ id }).del();
  },
};

export default Post;
