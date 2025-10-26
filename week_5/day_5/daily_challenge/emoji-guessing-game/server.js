import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { emojis } from "./emojis.js";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let scores = {}; // { playerName: score }

// Function to get random emoji with options
function getRandomEmojiQuestion() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[randomIndex];

  // Get 3 random wrong answers
  const options = [correctEmoji.name];
  while (options.length < 4) {
    const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(randomOption)) options.push(randomOption);
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  return {
    emoji: correctEmoji.emoji,
    correctAnswer: correctEmoji.name,
    options,
  };
}

// API route: get random emoji
app.get("/emoji", (req, res) => {
  const question = getRandomEmojiQuestion();
  res.json(question);
});

// API route: submit guess
app.post("/guess", (req, res) => {
  const { playerName, guess, correctAnswer } = req.body;

  if (!playerName) return res.status(400).json({ error: "Missing player name" });

  const isCorrect = guess === correctAnswer;

  if (!scores[playerName]) scores[playerName] = 0;
  if (isCorrect) scores[playerName] += 1;

  res.json({
    isCorrect,
    score: scores[playerName],
    message: isCorrect ? "✅ Correct!" : "❌ Wrong!",
  });
});

// API route: leaderboard
app.get("/leaderboard", (req, res) => {
  const leaderboard = Object.entries(scores)
    .map(([name, score]) => ({ name, score }))
    .sort((a, b) => b.score - a.score);
  res.json(leaderboard);
});

app.listen(port, () => console.log(`🎯 Server running on http://localhost:${port}`));
