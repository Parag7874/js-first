const score = 400
console.log(score);

const balance = new Number(100) // defi gives numbers
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // gives 100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // gives 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // gives 1,00,000 // gives comas

// ++++++++++++++ Maths +++++++++++++++++++

console.log(Math); // is object 
console.log(Math.abs(-4)); // turns into +5 // only turns into positive value
console.log(Math.round(4.3)); // gives 4
console.log(Meth.ceil(4.2)); // gives 5 // top value
console.log(Meth.floor(4.9)); // gives 4 
console.log(Meth.min(4, 3, 6, 8));
console.log(Meth.max(4, 3, 6, 8));

console.log(Math.random()); // gives random value between 0 to 1
console.log((Math.random()*10) +1); // between 1 to 10
console.log(Math.floor(Math.random()*10) +1); // gives roundof value

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min + 1)) + min)