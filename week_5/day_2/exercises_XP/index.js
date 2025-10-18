// 🌟 Exercise 1: Giphy API - hilarious gifs
// Step-by-step solution with Promises
const giphyURL1 = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(giphyURL1)
  .then(response => {
    // Check if HTTP response is OK (200-299)
    if (!response.ok) {
      throw new Error("Network error: " + response.status);
    }
    return response.json(); // Convert JSON string to JS object
  })
  .then(data => console.log("Exercise 1 Result:", data)) // Display JS object
  .catch(error => console.log("Exercise 1 Error:", error));


// 🌟 Exercise 2: Giphy API - 10 gifs of "sun" starting from 2
const giphyURL2 = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(giphyURL2)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network error: " + response.status);
    }
    return response.json();
  })
  .then(data => console.log("Exercise 2 Result:", data))
  .catch(error => console.log("Exercise 2 Error:", error));


// 🌟 Exercise 3: Async/Await - SWAPI starship
async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error("Network error: " + response.status);
    }
    const objectStarWars = await response.json();
    console.log("Exercise 3 Result:", objectStarWars.result);
  } catch (error) {
    console.log("Exercise 3 Error:", error);
  }
}

getStarship();


// 🌟 Exercise 4: Analyze async call with delay
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log("Exercise 4 Output Step 1: calling");
  let result = await resolveAfter2Seconds(); // Wait 2 seconds for promise to resolve
  console.log("Exercise 4 Output Step 2:", result); // Output after 2 seconds
}

asyncCall();
