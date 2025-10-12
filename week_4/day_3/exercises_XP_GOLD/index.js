/**************************************************************
 🌟 Exercise 1 : Print Full Name
**************************************************************/

function printFullName({first, last}) {
    return `Your full name is ${first} ${last}`;
}

console.log(printFullName({first: 'Elie', last:'Schoppik'}));
// Output: "Your full name is Elie Schoppik"


/**************************************************************
 🌟 Exercise 2 : Keys and Values
**************************************************************/


function keysAndValues(obj) {
    const sortedKeys = Object.keys(obj).sort(); // sort keys alphabetically
    const values = sortedKeys.map(key => obj[key]); // map sorted keys to values
    return [sortedKeys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// Output: [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// Output: [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
// Output: [["key1", "key2", "key3"], [true, false, undefined]]




// **************************************************************
// 🌟 Exercise 3 : Counter Class
// **************************************************************/

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

//  What the exercise asks:
//   - Analyze the behavior of class instances and object references
const counterOne = new Counter();
counterOne.increment(); // count = 1
counterOne.increment(); // count = 2

const counterTwo = counterOne; // counterTwo references the same object as counterOne
counterTwo.increment(); // count = 3

console.log(counterOne.count); 
// Output: 3
