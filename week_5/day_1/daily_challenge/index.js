// Daily Challenge - Promises with makeAllCaps() and sortWords()

// 1️⃣ Function makeAllCaps
// This function takes an array of words as input
// - If all elements are strings, resolve with an array of uppercased words
// - If any element is not a string, reject with an error message
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    // Check if all elements are strings
    const allStrings = words.every(word => typeof word === 'string');

    if (allStrings) {
      // Transform all words to uppercase
      const uppercasedWords = words.map(word => word.toUpperCase());
      resolve(uppercasedWords);
    } else {
      reject("Error: All elements must be strings!");
    }
  });
}

// 2️⃣ Function sortWords
// This function takes an array of words (uppercased) as input
// - If the array has more than 4 elements, resolve with the array sorted alphabetically
// - Else, reject with an error message
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sortedWords = words.slice().sort(); // slice() to avoid mutating original array
      resolve(sortedWords);
    } else {
      reject("Error: Array length must be greater than 4 to sort.");
    }
  });
}

// 3️⃣ TEST CASES

// Test 1: Array contains a number → catch executed
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log("Test 1:", error)); 
// Expected output: Test 1: Error: All elements must be strings!

// Test 2: Array length not bigger than 4 → catch executed
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log("Test 2:", error)); 
// Expected output: Test 2: Error: Array length must be greater than 4 to sort.

// Test 3: Array valid → then executed, uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log("Test 3:", result))
  .catch(error => console.log(error)); 
// Expected output: Test 3: ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]


// 2nd Daily Challenge - Morse Code

// JSON string of Morse code
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// 1️⃣ toJs(): convert JSON string to JS object
function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse.toLowerCase()); // parse JSON
      // check if object is empty
      if (Object.keys(morseJS).length === 0) {
        reject("Error: Morse object is empty!");
      } else {
        resolve(morseJS);
      }
    } catch (err) {
      reject("Error parsing JSON: " + err);
    }
  });
}

// 2️⃣ toMorse(morseJS): ask user input and translate to Morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();
    // Split input into characters
    const chars = userInput.split("");
    const morseTranslation = [];

    for (let char of chars) {
      if (morseJS[char] === undefined) {
        reject(`Error: Character "${char}" not in Morse dictionary!`);
        return; // exit loop
      } else {
        morseTranslation.push(morseJS[char]);
      }
    }

    resolve(morseTranslation);
  });
}

// joinWords(morseTranslation): display translation on DOM
function joinWords(morseTranslation) {
  // join with line breaks
  const output = morseTranslation.join("\n");
  // create a <pre> element to preserve line breaks
  const pre = document.createElement("pre");
  pre.textContent = output;
  document.body.appendChild(pre);
}

//Chain the functions
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.log(error));
