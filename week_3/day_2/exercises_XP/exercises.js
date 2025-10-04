// 🌟 Exercise 1 : Find the numbers divisible by 23
function displayNumbersDivisible(divisor=23) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {   
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}
displayNumbersDivisible(5);


// 🌟 Exercise 2 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}; 
// shopping list as an array
let shoppingList = ["banana", "orange", "apple"];
function myBill() {
    let total = 0;

    for (let item of shoppingList) {
        if (stock[item] > 0) {              
            console.log(item);              
            total += prices[item];          
            stock[item]--;                  
        }
    }

    return total;  
}

console.log("Total:", myBill());
console.log("Updated stock:", stock);


// Exercise 3 : What’s in my wallet ?
function changeEnough(itemPrice, amountOfChange){
  total=0
     for(let i=0; i<amountOfChange.length; i++){
        if(i===0){
            total += amountOfChange[i]*0.25;
        }                                       
        else if(i===1){
            total += amountOfChange[i]*0.10;
        }
        else if(i===2){
            total += amountOfChange[i]*0.05;

        }
        else if(i===3){
            total += amountOfChange[i]*0.01;
        }}
        if(total >= itemPrice){
            return true;

        } else {
            return false;
        }
}   
console.log(changeEnough(4.25, [25, 20, 5, 0]))

// 🌟 Exercise 4 : Vacations Costs
let numbernights;
function hotelCost(nights) {
do {
    nights = prompt("How many nights would you like to stay in the hotel?");
    
    if (nights !== null) {
        nights = Number(nights); 
    }

} while (nights === null || nights === "" || isNaN(nights) || nights <= 0);
totalCost = nights * 140;
return totalCost
}


// Define a function called planeRideCost().
function planeRideCost(){
    let destination,price
    do {
    destination = prompt("what is your destination?");
    
    if (destination !== null) {
        destination = String(destination); 
    }

} while (destination === null || destination === "" );
if (destination === "London"){
    price = 183;
    console.log("The price to", destination, "is $", price);
} else if (destination === "Paris"){
    price = 220;
    console.log("The price to", destination, "is $", price);    
} else {
    price = 300;
    console.log("The price to", destination, "is $", price);        
}return price;
}
// Define a function called rentalCarCost().

function rentalCarCost(){
    let days;
    do {
    days = prompt("How many days would you like to rent the car?");
    
    if (days !== null) {
        days = Number(days); 
    }
} while (days === null || days === "" || isNaN(days) || days <= 0);
    totalCost = days * 40;
    if (days > 10){
        totalCost = totalCost * 0.95;
    }
    return totalCost;
}
// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Call the function totalVacationCost()
function totalVacationCost(){
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();
    let total = hotel + plane + car;
    console.log("The car cost: $", car, ", the hotel cost: $", hotel, ", the plane tickets cost: $", plane, ". Total vacation cost is: $", total);
    return total;
}
totalVacationCost();
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
function hotelCost(nights) {
  return nights * 140;
}
function planeRideCost(destination) {
    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}
function rentalCarCost(days) {
    let totalCost = days * 40;
    if (days > 10) {
        totalCost *= 0.95; // 5% discount
    }
    return totalCost;
    }
    function totalVacationCost() {
    let nights, days, destination;

    // Ask for nights
    do {
        nights = prompt("How many nights would you like to stay in the hotel?");
        if (nights !== null) nights = Number(nights);
    } while (nights === null || nights === "" || isNaN(nights) || nights <= 0);

    // Ask for destination
    do {
        destination = prompt("What is your destination?");
    } while (destination === null || destination === "");

    // Ask for car rental days
    do {
        days = prompt("How many days would you like to rent the car?");
        if (days !== null) days = Number(days);
    } while (days === null || days === "" || isNaN(days) || days <= 0);

    // Call functions with arguments
    let hotel = hotelCost(nights);
    let plane = planeRideCost(destination);
    let car = rentalCarCost(days);

    let total = hotel + plane + car;

    console.log(
        `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}. Total vacation cost is: $${total}`
    );

    return total;
}
// 🌟 Exercise 5 : Users
// Instructions

// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>








// Add the code above, to your HTML file




// Using Javascript:





// Retrieve the div and console.log it



// Change the name “Pete” to “Richard”.



// Delete the second <li> of the second <ul>.



// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)




// Using Javascript:





// Add a class called student_list to both of the <ul>'s.



// Add the classes university and attendance to the first <ul>.




// Using Javascript:





// Add a “light blue” background color and some padding to the <div>.



// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)



// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)



// Change the font size of the whole body.




// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).





// 🌟 Exercise 6 : Change the navbar

// Instructions

// Create a new structured HTML file and a new Javascript file

// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>








// Add the code above, to your HTML file




// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.




// We are going to add a new <li> to the <ul>.





// First, create a new <li> tag (use the createElement method).



// Create a new text node with “Logout” as its specified text.



// Append the text node to the newly created list node (<li>).



// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.




// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).





// Exercise 7 : My Book List

// Instructions

// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.





// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>




// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :





// title,



// author,



// image : a url,



// alreadyRead : which is a boolean (true or false).




// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)




// Requirements : All the instructions below need to be coded in the js file:





// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :





// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.



// The width of the image has to be set to 100px.



// If the book is already read. Set the color of the book’s details to red.
