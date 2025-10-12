/**************************************************************
 🌟 Exercise 1 : Advanced Array Methods - Game Info
**************************************************************/

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

// Task 1: Create an array of usernames with "!" using forEach
const usernames = [];
gameInfo.forEach(user => {
    usernames.push(user.username + "!");
});
console.log("Usernames with !:", usernames);
// Output: ["john!", "becky!", "susy!", "tyson!"]



// Task 2: Create an array of winners with score > 5
const winners = [];
gameInfo.forEach(user => {
    if (user.score > 5) {
        winners.push(user.username);
    }
});
console.log("Winners with score > 5:", winners);
// Output: ["becky", "susy"]



// ✅ Task 3: Calculate total score of all users
const totalScore = gameInfo.reduce((acc, user) => acc + user.score, 0);
console.log("Total score of all users:", totalScore);
// Output: 71
