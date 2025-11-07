// Importer knex
import knex from "knex";

// Configuration de la connexion PostgreSQL
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",     // 🔹 Ton utilisateur PostgreSQL
    password: "sara",     // 🔹 Ton mot de passe PostgreSQL
    database: "blog_db",  // 🔹 Le nom de ta base
  },
});

export default db;
