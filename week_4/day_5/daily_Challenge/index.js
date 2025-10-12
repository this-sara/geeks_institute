// 🌟 Exercise: Check if two strings are anagrams

/**
 * Function: isAnagram
 * -------------------
 * Takes two strings as input and returns true if they are anagrams, false otherwise.
 * - Ignores spaces
 * - Case-insensitive
 * 
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} - true if anagrams, false otherwise
 */
function isAnagram(str1, str2) {

  // 1️⃣ Normalize the first string
  // - Convert to lowercase to ignore uppercase/lowercase differences
  // - Remove all whitespace using regex /\s/g
  const normalizedStr1 = str1.toLowerCase().replace(/\s/g, '');
  
  // 2️⃣ Normalize the second string (same as first)
  const normalizedStr2 = str2.toLowerCase().replace(/\s/g, '');
  
  // 3️⃣ Convert the normalized strings into arrays of letters
  //    This allows us to sort the letters alphabetically
  const lettersArray1 = normalizedStr1.split(''); // e.g., "astronomer" => ['a','s','t','r','o','n','o','m','e','r']
  const lettersArray2 = normalizedStr2.split('');

  // 4️⃣ Sort the arrays alphabetically
  //    Sorting is necessary because anagrams have the same letters but in different order
  const sortedArray1 = lettersArray1.sort(); // e.g., ['a','e','m','n','o','o','r','r','s','t']
  const sortedArray2 = lettersArray2.sort();

  // 5️⃣ Join the sorted arrays back into strings
  //    This makes it easy to compare them directly
  const sortedStr1 = sortedArray1.join(''); // e.g., "aemnoorrst"
  const sortedStr2 = sortedArray2.join('');

  // 6️⃣ Compare the sorted strings
  //    If they are identical, then the original strings are anagrams
  return sortedStr1 === sortedStr2;
}

//  Test cases to check if our function works

console.log(isAnagram("Astronomer", "Moon starer"));        // true, because letters match
console.log(isAnagram("School master", "The classroom"));   // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("Hello", "Olelh"));                   // true
console.log(isAnagram("Hello", "World"));                   // false, letters do not match

/* 
   Observations:
  - Function ignores spaces and case
  - Works for single words or multiple words
  - If you want to ignore punctuation as well, you can add:
      .replace(/[^a-z]/g, '') 
    during normalization to remove all non-letter characters
*/
