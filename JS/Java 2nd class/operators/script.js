let a = 10;
let b = 15;

let comparison1 = a < b; // True
let comparison2 = a != b; // True
let comparison3 = b >= a; // True

let expression = comparison1 && comparison2 && comparison3; //True && True && True ->
console.log(`expression: ${expression}`);

let expression1 = comparison1 || comparison2 || comparison3; // True || True || False ->
console.log(`expression1: ${expression1}`);

let complexExpression = (5 < 2) && ((3+4) === 7); // 5<2 -> false && (3+4  -> 7 === 7)
console.log(`complexExpression: ${complexExpression}`);




let cat = "Cat"
let dog = "Dog"
let mouse = "";
let snake;

console.log(cat && dog); // thruty && thruty -> secound value -> 'dog'
let isValidThruty = (3+2) === 5 && dog && !mouse; // true && "Dog" && true -> true
console.log(isValidThruty);

let orComparison = dog || mouse || cat;
let value = mouse || cat;

console.log(snake && dog); // falsy && true -> undefined
console.log(null && snake); // falsy && falsy -> null



console.log(orComparison);

