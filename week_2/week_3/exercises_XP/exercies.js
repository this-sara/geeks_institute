// 🌟 Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
people.shift();
console.log(people);
// Write code to replace “James” to “Jason”.
people.pop();
people.push("Jason");
// Write code to add your name to the end of the people array.
people.push("sara");
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
const newPeople = people.slice(1, 3);
console.log(newPeople);
// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
// because "Foo" is not in the array it returns -1

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length - 1];
console.log(last);
// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }   
}
// 🌟 Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["blue", "red", "green", "yellow", "purple"];
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
for (let i = 0; i < colors.length; i++) {
    let suffix;
    if (i === 0) {
        suffix = "st";
    } else if (i === 1) {
        suffix = "nd";
    } else if (i === 2) {
        suffix = "rd";
    } else {
        suffix = "th";
    }
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

// 🌟 Exercise 3 : Repeat the question

// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let number = parseInt(prompt("Please enter a number:"));
console.log(typeof number);
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
while (number < 10) {
    number = parseInt(prompt("Please enter a new number:"));
}
console.log("Thank you! Your number is " + number);
// 🌟 Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.
console.lof(building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
const secondTenant = building.nameOfTenants[1]; // get the name dynamically
let secondTenantRooms;

// Loop through numberOfRoomsAndRent to find the rooms for the second tenant
for (const tenant in building.numberOfRoomsAndRent) {
    if (tenant.toLowerCase() === secondTenant.toLowerCase()) {
        secondTenantRooms = building.numberOfRoomsAndRent[tenant][0];
        break;
    }
}

console.log(`Second tenant: ${secondTenant}, Rooms: ${secondTenantRooms}`);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1]; 
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been increased to 1200.");
}

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
const family = {
    father: "John",
    mother: "Jane",
    son: "Mike",
    daughter: "Emily"
};
// Using a for in loop, console.log the keys of the object.
for (const member in family) {
    console.log(member);
}
// Using a for in loop, console.log the values of the object.
for (const member in family) {
    console.log(family[member]);
}
// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
for (const member in family) {
    console.log(family[member]);
}
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let sentence = "";
for (const key in details) {
    sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim());
// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
let societyName = "";
names.sort();
for (let i = 0; i < names.length; i++) {
    societyName += names[i][0];
}
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

