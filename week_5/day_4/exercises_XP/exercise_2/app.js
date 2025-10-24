import { people } from './data.js';

function getAverageAge(list) {
  const total = list.reduce((sum, p) => sum + p.age, 0);
  return total / list.length;
}

console.log("Average age:", getAverageAge(people));
