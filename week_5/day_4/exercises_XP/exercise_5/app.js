// app.js
const _ = require('lodash');
const math = require('./math');

console.log("Sum:", math.add(5, 10));
console.log("Product:", math.multiply(4, 3));
console.log("Max using Lodash:", _.max([10, 20, 30]));
