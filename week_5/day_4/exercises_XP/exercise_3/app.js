// app.js
const { readFile, writeFile } = require('./FileManager');

const content = readFile('./Hello World.txt');
console.log("File content:", content);

writeFile('Bye World.txt', 'Writing to the file');
console.log("File written successfully!");
