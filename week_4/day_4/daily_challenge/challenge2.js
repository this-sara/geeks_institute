/* 
🌟 Exercise: allTruthy Function
*/

function allTruthy(...args) {
    // The spread/rest operator converts all arguments into an array
    return args.every(Boolean); 
}

// Test cases
console.log(allTruthy(true, true, true)); // true
console.log(allTruthy(true, false, true)); // false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); // false
console.log(allTruthy("Hello", 1, [], {})); // true
console.log(allTruthy(null, "test")); // false
