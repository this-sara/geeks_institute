// exercice 1
const landscape = () => {
    let result = "";

    const flat = (x) => {
        for (let i = 0; i < x; i++) {
            result += "_";
        }
    }

    const mountain = (x) => {
        result += "/";
        for (let i = 0; i < x; i++) {
            result += "'";
        }
        result += "\\";
    }

    flat(4);
    mountain(4);
    flat(4);

    return result;
}

console.log(landscape()); // ____/''''\____
// exercice 2
const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3)); // 13
//EXERCISE 3
const curriedSum = (a) => (b) => a + b;
console.log(curriedSum(30)(1)); // 31
//EXERCISE 4
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
console.log(add5(12)); // 17
//exercise 5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;

console.log(compose(add1, add5)(10)); // 16


