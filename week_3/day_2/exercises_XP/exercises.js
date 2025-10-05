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

