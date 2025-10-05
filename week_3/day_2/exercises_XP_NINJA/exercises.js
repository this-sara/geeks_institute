// exercise 1:
let randomNum = Math.floor(Math.random() * 100) + 1;
for (let i = 0; i <= randomNum; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// exercice 2:
function capitalize(str) {
  let even = "";
  let odd = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      even += str[i].toUpperCase();
      odd += str[i];
    } else {
      even += str[i];
      odd += str[i].toUpperCase();
    }
  }
  return [even, odd];
}

console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']
// Exercise 3 : Is palindrome?
function IsPalindrome(){
  let str = prompt("Enter a word:");
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    console.log(`${str} is a palindrome.`);
  } else {
    console.log(`${str} is not a palindrome.`);
  }   
}
// Exercise 4 : Biggest Number
function biggestNumberInArray(arr) {
  let numbers = arr.filter(item => typeof item === 'number');
  return numbers.length ? Math.max(...numbers) : 0;
}
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2])); // 4
console.log(biggestNumberInArray([])); // 0

// Exercise 5: Unique Elements
function uniqueElements(arr) {
  return [...new Set(arr)];
}
console.log(uniqueElements([1, 2, 3, 3, 3, 4, 5])); // [1, 2, 3, 4, 5]

// Exercise 6 : Calendar
function createCalendar(year, month) {
  const table = document.createElement("table");

  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  // Create header row
  const headerRow = document.createElement("tr");
  for (let day of days) {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  let date = new Date(year, month - 1, 1);
  let row = document.createElement("tr");

  // Fill empty cells before first day
  let startDay = (date.getDay() + 6) % 7; // Adjust so Monday = 0
  for (let i = 0; i < startDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  while (date.getMonth() === month - 1) {
    const cell = document.createElement("td");
    cell.textContent = date.getDate();
    row.appendChild(cell);

    if ((date.getDay() + 6) % 7 === 6) { // Sunday
      table.appendChild(row);
      row = document.createElement("tr");
    }

    date.setDate(date.getDate() + 1);
  }

  // Append last row
  if (row.children.length) table.appendChild(row);

  document.body.appendChild(table);
}

createCalendar(2012, 9);
