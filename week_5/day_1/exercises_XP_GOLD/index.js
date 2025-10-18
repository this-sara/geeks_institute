/*****************************************************
 *  Exercise 1: Promise.all()
 *****************************************************/
const promise1 = Promise.resolve(3);
const promise2 = 42; // treated as Promise.resolve(42)
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo'); // resolves after 3 seconds
});

// Using Promise.all()
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(" All promises resolved:", results);
    // Expected output after 3 seconds: [3, 42, "foo"]
  })
  .catch(error => {
    console.log("❌ At least one promise rejected:", error);
  });

/*****************************************************
 * - Promise.all returns a single promise
 * - The output array respects the order of the input array, 
 *   even if some promises resolve faster than others
 * - If any promise rejects, the catch block executes immediately
 *****************************************************/

/*****************************************************
 *  Exercise 2: Analyse Promise.all()
 *****************************************************/

// Function that returns a promise resolving to x*2
function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

// Original array
const arr = [1, 2, 3];

// Mapping the array with timesTwoAsync
// Each element becomes a Promise
const promiseArr = arr.map(timesTwoAsync);

// Using Promise.all to wait for all promises to resolve
Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
// Expected output: [2, 4, 6]

/*****************************************************
 *  Step-by-step reasoning:
 * 1. arr.map(timesTwoAsync) → [Promise(2), Promise(4), Promise(6)]
 * 2. Promise.all(promiseArr) waits for all promises to resolve
 * 3. When all are resolved, it returns a new promise with an array of results
 * 4. console.log(result) prints [2, 4, 6]
 *****************************************************/
