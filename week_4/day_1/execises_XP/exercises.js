const { Navbar } = require("react-bootstrap");

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
//a=3
// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// error in line 4 because a is read only
//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() //a=0
funcTwo() //a=5
funcThree() //a=5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// error in line 2 because a is read only


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // a="hello"
funcFive() // a="hello"

//#4 
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console: 
funcSix() // a="test"
// #4.2 What will happen if the variable is declared 
// with const instead of let ? // no change, a is still "test"

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console 
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// #5.1 -  in the if block 5
// outside of the if block 2
// #5.2 no change, first alert is 5, second alert is 2

// 🌟 Exercise 2 : Ternary operator

// 1️⃣ Transformer la fonction en fonction fléchée (arrow function)
const winBattle = () => true;
// 2️⃣ Créer une variable 'experiencePoints'
// Utiliser un opérateur ternaire pour lui attribuer une valeur
const experiencePoints = winBattle() ? 10 : 1;

// 3️⃣ Afficher le résultat dans la console
console.log(experiencePoints);


//  Exercise 3 : Is it a string ?
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output

// Example:
const isString = arg => typeof arg === 'string';

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false


// 🌟 Exercise 4 : Find the sum

// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const sum =(a,b)=> a+b;

// 🌟 Exercise 5 : Kg and grams

// 1️⃣ Function Declaration
function kgToGrams1(kg) {
    return kg * 1000;
}
console.log(kgToGrams1(5)); // 5000

// 2️⃣ Function Expression
const kgToGrams2 = function(kg) {
    return kg * 1000;
};
console.log(kgToGrams2(3)); // 3000

// Difference between function declaration and function expression:
// Function declarations are hoisted and can be called before they are defined.
// Function expressions are not hoisted and can only be called after they are defined.

// 3️⃣ One line Arrow Function
const kgToGrams3 = kg => kg * 1000;
console.log(kgToGrams3(2)); // 2000

// 🌟 Exercise 6 : Fortune teller 

(function() {
    // Ask user for inputs
    const numChildren = prompt("Enter the number of children:");
    const partnerName = prompt("Enter your partner's name:");
    const location = prompt("Enter a geographic location:");
    const jobTitle = prompt("Enter your job title:");

    // Create the fortune sentence
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;

    // Display it in the DOM
    const p = document.createElement('p');
    p.textContent = fortune;
    document.body.appendChild(p);

})();

// 🌟 Exercise 7 : Welcome

(function(name){
    // Create a div
    const divEl = document.createElement('div');

    // Add text and profile picture
    divEl.textContent = `Hi ${name}! `;

    // Optional: add profile picture
    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/30'; // replace with actual profile pic URL
    img.alt = `${name}'s profile picture`;
    img.style.borderRadius = '50%';
    img.style.marginLeft = '10px';
    
    divEl.appendChild(img);

    // Select the navbar (assuming it has id="navbar")
    const nav = document.getElementById('navbar');

    // Add the div to the navbar
    nav.appendChild(divEl);

})('sara'); 

// 🌟 Exercise 8 : Juice Bar
// Part I
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
        const p = document.createElement('p');
        p.textContent = sentence;
        document.body.appendChild(p);
    }

    // Invoke inner function once
    addIngredients('apple', 'banana', 'orange');
}

// Invoke outer function in global scope
makeJuice('medium');

// Part II
function makeJuice(size) {
    const ingredients = []; // empty array

    function addIngredients(ing1, ing2, ing3) {
        // Push ingredients into the array
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        // Display all ingredients
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        const p = document.createElement('p');
        p.textContent = sentence;
        document.body.appendChild(p);
    }

    // Add ingredients TWICE
    addIngredients('apple', 'banana', 'orange');
    addIngredients('strawberry', 'kiwi', 'mango');

    // Display the juice
    displayJuice();
}

// Invoke outer function in global scope
makeJuice('large');
