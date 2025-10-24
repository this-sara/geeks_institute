// In shop.js, require the product objects from the products.js module.
const products = require('./products');
function findProductByName(name) {
  return products.find(p => p.name.toLowerCase() === name.toLowerCase());
}
console.log(findProductByName("Laptop"));
console.log(findProductByName("Book"));
