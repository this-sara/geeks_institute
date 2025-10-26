let playerName = prompt("Enter your name:");
let currentAnswer = "";

async function fetchEmoji() {
  const res = await fetch("/emoji");
  const data = await res.json();

  currentAnswer = data.correctAnswer;
  document.getElementById("emoji").textContent = data.emoji;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  data.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => submitGuess(opt);
    optionsDiv.appendChild(btn);
  });
}

async function submitGuess(guess) {
  const res = await fetch("/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ playerName, guess, correctAnswer: currentAnswer }),
  });

  const data = await res.json();
  document.getElementById("feedback").textContent = data.message;
  document.getElementById("score").textContent = data.score;

  fetchLeaderboard();
  setTimeout(fetchEmoji, 1000); // load new emoji after 1s
}

async function fetchLeaderboard() {
  const res = await fetch("/leaderboard");
  const leaderboard = await res.json();
  const list = document.getElementById("leaderboard");
  list.innerHTML = leaderboard.map(l => `<li>${l.name}: ${l.score}</li>`).join("");
}

fetchEmoji();
fetchLeaderboard();
