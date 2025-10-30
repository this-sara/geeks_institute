// ==========================
// Exercise: Trivia Quiz Game
// ==========================

// Step 1: Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// Step 2: Initialize the Express app
const app = express();
const port = 3000;

// Step 3: Middleware to parse POST request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Step 4: Setup session to keep track of user's quiz progress
app.use(
  session({
    secret: 'trivia-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Step 5: Create the trivia questions (hard-coded)
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// Step 6: Create a router for the quiz
const quizRouter = express.Router();

// Route: GET /quiz -> Start quiz and show first question
quizRouter.get('/', (req, res) => {
  // Initialize session variables
  req.session.score = 0;
  req.session.currentQuestion = 0;

  // Send first question
  const question = triviaQuestions[req.session.currentQuestion].question;
  res.send(`
    <h2>Trivia Quiz</h2>
    <p>Question 1: ${question}</p>
    <form method="POST" action="/quiz">
      <input type="text" name="answer" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route: POST /quiz -> Submit answer and show next question
quizRouter.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const currentIndex = req.session.currentQuestion;

  // Check if answer is correct
  const correctAnswer = triviaQuestions[currentIndex].answer;
  let feedback = '';
  if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    req.session.score += 1;
    feedback = `<p style="color:green;">Correct! ✅</p>`;
  } else {
    feedback = `<p style="color:red;">Incorrect! ❌ The correct answer was: ${correctAnswer}</p>`;
  }

  // Move to next question
  req.session.currentQuestion += 1;

  // Check if quiz is finished
  if (req.session.currentQuestion >= triviaQuestions.length) {
    res.redirect('/quiz/score');
  } else {
    const nextQuestion = triviaQuestions[req.session.currentQuestion].question;
    res.send(`
      <h2>Trivia Quiz</h2>
      ${feedback}
      <p>Question ${req.session.currentQuestion + 1}: ${nextQuestion}</p>
      <form method="POST" action="/quiz">
        <input type="text" name="answer" required />
        <button type="submit">Submit</button>
      </form>
    `);
  }
});

// Route: GET /quiz/score -> Display final score
quizRouter.get('/score', (req, res) => {
  const score = req.session.score || 0;
  const totalQuestions = triviaQuestions.length;
  res.send(`
    <h2>Quiz Completed!</h2>
    <p>Your final score: ${score} / ${totalQuestions}</p>
    <a href="/quiz">Restart Quiz</a>
  `);
});

// Step 7: Mount the quiz router
app.use('/quiz', quizRouter);

// Step 8: Start the server
app.listen(port, () => {
  console.log(`Trivia Quiz app listening at http://localhost:${port}`);
});
