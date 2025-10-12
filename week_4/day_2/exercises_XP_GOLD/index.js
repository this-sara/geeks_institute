/**************************************************************
 🌟 Exercise 1 : Analyzing the map method
**************************************************************/
const exercise1 = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return; 
});
console.log("Exercise 1 Output:", exercise1); // -> [2, 4, 6]



/**************************************************************
 🌟 Exercise 2 : Analyzing the reduce method
**************************************************************/

// ✅ Given code:
const exercise2 = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2], 
);

console.log("Exercise 2 Output:", exercise2); // -> [1, 2, 0, 1, 2, 3]



/**************************************************************
 🌟 Exercise 3 : Analyze this code
**************************************************************/

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log("num:", num, "| index i:", i);
    return num * 2;
});


console.log("Exercise 3 New Array:", newArray); // -> [2, 4, 8, 10, 16, 18]



/**************************************************************
 🌟 Exercise 4 : Nested Arrays
**************************************************************/

// Task 1: Flatten this array: [[1],[2],[3],[[[4]]],[[[5]]]] → [1,2,3,[4],[5]]
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const exercise4_part1 = array.map(item => item.flat(Infinity).length === 1 ? item.flat(Infinity)[0] : item.flat(Infinity));
console.log("Exercise 4 Part 1:", exercise4_part1); // -> [1,2,3,4,5] 

// Bonus: One line solution
const exercise4_bonus = array.flat(2);
console.log("Exercise 4 Bonus Flatten:", exercise4_bonus); // -> [1,2,3,4,5]


// Task 2: Modify this array → ["Hello young grasshopper!","you are","learning fast!"]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const exercise4_part2 = greeting.map(words => words.join(" "));
console.log("Exercise 4 Part 2:", exercise4_part2);

// Task 3: Turn into one full sentence
const fullSentence = exercise4_part2.join(" ");
console.log("Exercise 4 Full Sentence:", fullSentence); // -> "Hello young grasshopper! you are learning fast!"


// Task 4: Turn trapped number → [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const exercise4_part3 = trapped.flat(Infinity);
console.log("Exercise 4 Trapped Output:", exercise4_part3); // -> [3]
