const name = "parag"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('parag-pc')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  parag  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://parag.com/parag%20parmar"

console.log(url.replace('%20', '_'))

console.log(url.includes('wasd'))

console.log(gameName.split('_'));