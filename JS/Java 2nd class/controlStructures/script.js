 
// if expression is yes/true it will countinue on line 4
// if(expression) {
//     //some code with be executed
// }
// if expression is no/false it will countinue on line 6

//   let score = 99;

// if(score > 100) {
//     alert("you won");
// }

// else

// if(score > 100) {
//     alert("The score is larger then 100");

// } else {
//     alert("Everything else");
// }

// if(expression){ // if needs expression to be evaluated
//  // all the code goes here
 // } else { // else does not need and expression to be evaluated
// // all the backup code goes here




// if(expression){
//     // code goes here
// } else if(expression){
//     //code goes here
// } else {
//     // code goes here
// }

// let fridayCash = 50;

// if(fridayCash >= 50){
// alert("You should go to a dinner and a movie");
// } else if(fridayCash >= 35){
// alert("You should go out for a fine meal");
// } else if(fridayCash >= 12){
// alert("You should go out and see a movie");
// } else {
// alert("Looks like you will be watching TV");
// }

// let numberOne = 10;
// let numberTwo = 20;
// let numberThree = 30;

// if(numberOne > numberTwo){
//     console.log("This is the if statement (numberOne > numberTwo)");
// } else if(numberThree > numberTwo){
//     console.log("This is the first else if statement (numberThree > numberTwo)");
// } else if((numberOne + numberTwo) === numberThree) {
//     console.log("This is the second else if statement (numberOne + numberTwo)");
// } else {
//     console.log("Else");
// }




// Getting value from User

// let userInput = prompt("Please enter a number");

// console.log(userInput);
// console.log(typeof userInput);

// //parsing Value

// let parsedInput = parseInt(userInput);

// console.log(parsedInput);
// console.log(typeof parsedInput);

// isNaN();
// Number.isNaN();


// let userInput = prompt("How much money you have");

// let parsedInput = parseInt(userInput);



// let howMuch = 50;

// let howMuchSpent = 20;

// let whatToDoIf = "Go to ";

// let whatToDoIfElse = "Go by";

// let whatToDoElse = "Go pass";



// if(howMuch > howMuchSpent){
//     console.log(whatToDoIf);
// } else if(howMuch < howMuchSpent){
//     console.log(whatToDoIfElse);
// } else {
//     console.log(whatToDoElse);
// }


let userInput = prompt("Vnesi broj");

let parsedInput = parseInt(userInput);

if(!Number.isNaN(parsedInput)) {
   
    if(parsedInput > 50) {
    console.log(50);
   } else if (parsedInput > 40) {
    console.log(40);
   } else if (parsedInput > 30) {
    console.log(30);
   } else if (parsedInput > 20) {
    console.log(20);
   }else {
    console.log("Stay home");
   }
} else {
    console.log("Not a valid input");
}