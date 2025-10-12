/**************************************************************
 🌟 Exercise 1 : Dog age to Human years
**************************************************************/
const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

// 1️⃣ Using a loop
let sumHumanYearsLoop = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i].type === "dog") {
        sumHumanYearsLoop += data[i].age * 7;
    }
}
console.log("Exercise 1 - Sum using loop:", sumHumanYearsLoop); 
// Expected: (3+6+3+10)*7 = 22*7 = 154

// 2️⃣ Using reduce()
const sumHumanYearsReduce = data.reduce((acc, curr) => {
    if (curr.type === "dog") {
        acc += curr.age * 7; 
    }
    return acc;
}, 0); 
console.log("Exercise 1 - Sum using reduce:", sumHumanYearsReduce);



/**************************************************************
 🌟 Exercise 2 : Email
**************************************************************/
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanEmail = userEmail3.trim(); 
console.log("Exercise 2 - Clean Email:", cleanEmail);



/**************************************************************
 🌟 Exercise 3 : Employees #3
**************************************************************/

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];


const usersObj = {}; 
users.forEach(user => {
    const fullName = `${user.firstName} ${user.lastName}`;
    usersObj[fullName] = user.role;
});

console.log("Exercise 3 - Users Object:", usersObj);




/**************************************************************
 🌟 Exercise 4 : Array to Object
**************************************************************/

const letters = ['x', 'y', 'z', 'z'];

// 1️⃣ Using a for loop
const countLettersLoop = {};
for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (countLettersLoop[letter]) {
        countLettersLoop[letter] += 1; // Increment if already exists
    } else {
        countLettersLoop[letter] = 1; // Initialize if first occurrence
    }
}
console.log("Exercise 4 - Using loop:", countLettersLoop); 
// Output: { x: 1, y: 1, z: 2 }

// 2️⃣ Using reduce()
const countLettersReduce = letters.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1; // Initialize or increment count
    return acc;
}, {}); 
console.log("Exercise 4 - Using reduce:", countLettersReduce); 
// Output: { x: 1, y: 1, z: 2 }
