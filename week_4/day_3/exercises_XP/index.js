/**************************************************************
 🌟 Exercise 1 : Location
**************************************************************/

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// Output: "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"




/**************************************************************
 🌟 Exercise 2: Display Student Info
**************************************************************/


function displayStudentInfo({first, last}) {
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// Output: "Your full name is Elie Schoppik"




/**************************************************************
 🌟 Exercise 3: User & ID
**************************************************************/

const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1️⃣ Convert object to array
const usersArray = Object.entries(users);
console.log("Users as array:", usersArray);
// Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// 2️⃣ Multiply user IDs by 2
const updatedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log("Users with ID*2:", updatedUsersArray);
// Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]




/**************************************************************
 🌟 Exercise 4 : Person class
**************************************************************/

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);




/**************************************************************
 🌟 Exercise 5 : Dog class
**************************************************************/

class Dog {
  constructor(name) {
    this.name = name;
  }
};

// Correct way to extend Dog class:
// Option 2 is correct:
//   - Must call super(name) before using "this"
//   - Sets inherited name and new property size

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

// Options 1,3,4 are incorrect because:
//   - Option 1: uses this before super() → error
//   - Option 3: name is undefined, calls super(name) without parameter
//   - Option 4: does not call super() → error




/**************************************************************
 🌟 Exercise 6 : Challenges
**************************************************************/

// 1️⃣ Evaluate
// console.log([2]===[2]); // false → different references
// console.log({}==={});   // false → different object references

// 2️⃣ Object reference behavior
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number); // 4 → same reference as object1
console.log(object3.number); // 4 → same reference as object1
console.log(object4.number); // 5 → different object, unchanged

// 3️⃣ Class Animal & Mammal
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    // Method to return info and sound
    sound(soundName) {
        return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. Sound: ${soundName}`;
    }
}

// 4️⃣ Create farmerCow instance
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("moos"));
// Output: "Moooo I'm a cow, named Lily and I'm brown and white. Sound: moos"
