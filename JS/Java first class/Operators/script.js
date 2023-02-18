console.log("Connected");

let a = 2;
let b = 4;

let sum = a + b; // sum = 2 + 4; = 6
let substract = b - a; //substract = 4 - 2; = 2

console.log(sum);
console.log(substract);

let c = "2" + "2"; // 
// concetenatioon
let firstName = 'Gelco'
let lastName = 'Gele'

let fullName = firstName + " " + lastName; // GelcoGele -> Gelco Gele
console.log(fullName);

let test = fullName = firstName + " " + lastName + 7 ;
console.log(fullName);

let multiply = a * b; // 8
let divide = b / a; // 2
let modul = b % a; // 0

console.log('========');
console.log(multiply);
console.log(divide);
console.log(modul);

let sumOfAll= sum + substract + multiply + divide + modul;

console.log(sumOfAll);

let abc = 1;

abc++; // 2
abc = abc + 1 ; // 3


abc--; // 2
abc = abc - 1; // 1

abc+=3;
abc = abc + 3;

abc-=3;
abc = abc - 3;

abc*=2;
abc = abc * 2;



console.log(abc);


// Comparison operators

let large = 10;
let small = 5;

console.log(large > small); // True
console.log(small >= large); // False

console.log(large <= small); // False
console.log(small < large); // True

console.log("4" == 4); // with 2 equals we compare only value
console.log("4" === 4); // here we compare values and types
console.log(large != small); // true

console.log(large = small); // Small (5)

