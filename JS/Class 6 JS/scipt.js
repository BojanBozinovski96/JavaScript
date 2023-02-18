
// let fnc = function(){
//     console.log("Fnc");
// }
// console.log(typeof fnc);
// console.log(fnc);4
//  function fnc1(){
//     return `"Hello"`;

// }
// console.log(fnc1);
// fnc();


let fncWithParams = function (num1, num2, calculation) {
    let result = calculation(num1, num2);
    return result;
}

let result = fncWithParams(1, 2, function (a, b) {
    return a + b;
});

// console.log(result);

let result1 = fncWithParams(2, 4, (a, b) => b - a);
// console.log(result1);


let calculationFnc = (a, b) => a * b;

let result2 = fncWithParams(5, 5, calculationFnc);
// console.log(result2);



// function generateAritmethicCalculationFunction(sing) {


//     if (sing === "+") {
//        return (a, b) => a + b;
//     } else if (sing === "-") {
//         return function (a, b) {
//             return a - b;
//         }
//     } else if (sing === "*") {
//         return (a, b) => a * b;
//     } else if (sing === "/"){
//         return(a,b) => {
//             if(a === 0 || b === 0){
//                 return 0;
//             }
//         } 
//     }  return a / b;

// }


// let sumFnc = generateAritmethicCalculationFunction("+");
// console.log(sumFnc(2,2))


// function generateAritmethicCalculationFunction(sing) {

//     let arthmeticOperation = {
//         "+": (a,b) => a + b,
//         "-": (a,b) => a - b,
//         "*": (a,b) => a * b,
//         "/": (a,b) => a / b,

//     }

//     return arthmeticOperation(sing);


// }

// let multyply = generateAritmethicCalculationFunction("*");
// let substrack = generateAritmethicCalculationFunction("/");

// console.log(multyply(2,10));
// console.log(substrack(40,2));



function one(a) {
    let result = 0;
    return function (b) {
        result = a + b;
        return function (c) {
            result = result + c;
            return function (d) {
                result = result + d;
                return function (e) {
                    return result + e;
                }
            }
        }
    }
}

let result3 = one(5)(4)(3)(2)(1);
console.log(result3);



let  arthmeticOperationArray = [

     (a,b) => a + b,        
     (a,b) => a - b,
     (a,b) => a * b,
     (a,b) => a / b,
    
]

function showMassege(element, gender){
    let greetMassege = `Welcome ${gender === 'm' ? ` 'mr. ` : 'mrs.  '}`;
    return function(name){
        element.innerText = greetMassege + name ;
    }
}

let greetWithName = showMassege(document.getElementById('welcome'), 'm');
let greetWithNameFemale = showMassege(document.getElementById('welcome'), 'mrs.');
// greetWithName("Gele");
// greetWithNameFemale("Gelja");


// Pure functions


let numbers = [1, 2, 3, 4, 5];

function multyplyArray(){
    let sum = 0;
    for(let num of numbers){
      sum += num
    }
    return sum;
}


let num = 1;


function sumThreeNumbers(a, b){
    return num + a + b;
}


//Pure function
function sum(a,b){
    return a + b;
}