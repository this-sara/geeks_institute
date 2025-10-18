/*****************************************************
 *  Exercise 1: Comparison - Promise with Conditions
 *****************************************************/

const { resolve } = require("styled-jsx/css");

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(` Success: ${num} is less than or equal to 10`);
    } else {
      reject(` Error: ${num} is greater than 10`);
    }
  });
}

//  Test Case 1: Should REJECT
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));
// 👉 Output in console:  Error: 15 is greater than 10

//  Test Case 2: Should RESOLVE
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));


/*****************************************************
 *  Exercise 2: Promise that resolves after 4 seconds
 *****************************************************/
const myfirstpromise= new Promise ((resolve)=>{
  setTimeout(()=>{
    resolve("success");
  },4000)
})
myfirstpromise.then(result => console.log(result));

/*****************************************************
 *  Exercise 3: Promise.resolve and Promise.reject
 *****************************************************/
// Promise that resolves immediately with value 3
Promise.resolve(3).then(value => console.log(" Resolved with:", value));

// Promise that rejects immediately with "Boo!"
Promise.reject(" Boo!").then(value => console.log(value))     
.catch(error => console.log(" Rejected with:", error));

