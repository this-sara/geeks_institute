/**************************************************************
 🌟 Exercise 1 : Colors
**************************************************************/
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Display each color with its number
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check for "Violet"
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

/**************************************************************
 🌟 Exercise 2 : Colors #2
**************************************************************/

const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    let suffix = (index + 1 === 1) ? ordinal[1] :
                 (index + 1 === 2) ? ordinal[2] :
                 (index + 1 === 3) ? ordinal[3] : ordinal[0];

    console.log(`${index + 1}${suffix} choice is ${color}.`);
});



/**************************************************************
 🌟 Exercise 3 : Analyzing
**************************************************************/
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result1 = ['bread', ...vegetables, 'chicken', ...fruits];
// Observation:
//   - Spread operator (...) inserts all elements from arrays into new array.
console.log("Exercise 3 - Part 1:", result1); 
// Output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
const result2 = [...country];
// Observation:
//   - Strings are iterable, so spread creates array of characters
console.log("Exercise 3 - Part 2:", result2); 
// Output: ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
// Observation:
//   - Sparse array with 2 empty slots becomes [undefined, undefined] after spread
console.log("Exercise 3 - Bonus:", newArray); 
// Output: [undefined, undefined]



/**************************************************************
 🌟 Exercise 4 : Employees
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

// 1️⃣ map() → welcome message
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log("Exercise 4 - Welcome Students:", welcomeStudents);

// 2️⃣ filter() → Full Stack Residents
const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log("Exercise 4 - Full Stack Residents:", fullStackResidents);

// 3️⃣ Bonus → chain filter + map → last names only
const lastNamesFullStack = users
    .filter(user => user.role === "Full Stack Resident")
    .map(user => user.lastName);
console.log("Exercise 4 - Last Names Full Stack:", lastNamesFullStack);



//********************