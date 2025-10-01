// Exercise 1 : Divisible by three
// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.
let numbers = [123, 8409, 100053, 333333333, 7]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
// Exercise 2 : Attendance
let guestList = {
      randy: "Germany",
      karla: "France",
      wendy: "Japan",
      norman: "England",
      sam: "Argentina"
    };

    let name = prompt("Please enter your name:");
    name = name.toLowerCase();

    if (name in guestList) {
        alert("Hi! I'm " + name + ", and I'm from " + guestList[name] + ".");
    } else {
        alert("Hi! I'm a guest.");
    }
// Exercise 3 : Playing with numbers
let age = [20,5,12,43,98,55];
// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.
// 1. Console.log the sum of all the numbers in the age array.
for(i=0;i<age.length;i++){
    sum+=age[i]
}
console.log("the sum of all the numbers in the age array is: " +sum)
// 2. Console.log the highest age in the array.
max=0
for(i=0;i<age.length;i++){
    if(max<age[i]){
        max=age[i]
    }
}
console.log("the highest age in the array" +max)