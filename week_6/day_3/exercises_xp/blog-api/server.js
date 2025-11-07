import express from "express";
import postRoutes from "./server/routes/postRoutes.js";
import bookRoutes from "./server/routes/bookRoute.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/posts", postRoutes);
app.use("/api/books", bookRoutes); // ✅ New route group

// Gestion des routes invalides
app.use((req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

// Gestion des erreurs serveur
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Erreur interne du serveur" });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});


export default app;