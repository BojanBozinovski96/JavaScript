

// function printMassage(){
//     let massage = "Hello from SEDC";
//     console.log(massage);
// }

// printMassage();
// console.log(massage); gives an error becouse it is undefined

let greeting = "Hello SEDC!"; // global scope

function printGreeting(){
    let greeting = "Happy Holidays!"; // local scope
    console.log(greeting);
}

printGreeting();

let text = "This is a text in the global scope";

function printText(){
    console.log(text);
}

printText();

let num = 30;

function printNum(){
    num = 50;
    console.log(num);
}

printNum();


function badExample(){
    a = 10;
    console.log(a);

}

badExample();

let number = 100;

function printNumber(num) {
    number = 1000;
    console.log(num);
}

printNumber(number);

console.log(number);

let massage2 = "SomeMassage"

function printMassage2(massage2){
    massage2 = "Something else";
    console.log(massage2);
}

printMassage2(massage2);

let num1 = 1;

function test(){
 let num1 = 100;
 console.log(num1);
   let num2 = 9;
   function test2(){
    let num1 = 3;
    console.log(num1);

 } function test3() {
    let num4 = 10;
    console.log(num2);
    console.log(num4);
    test3();

 }
test2();
}
test();



test();
function test() {
    function test2(){
        function test3(){


        }
    }
}


let trainer = "Gelco"

let doWeNeedAChange = true;

function changeTrainer(){
     let name = "";
    if(doWeNeedAChange ){
       name = "Gele";
    } 
    else if(!doWeNeedAChange){
       name = "Angele";
    }
    else {
       name = "Bob";
    }
    console.log(name);
}

changeTrainer();


// let celsius = 10;
// let farenheits = 50;

// function farToCel(celsius){
//     let result = celsius * 1.8 + 32;
//     return result;
// }
// function celToFar(farenheits){
//     let result = (5/9) * (farenheits - 32);
//     return result;
// }
// let personChoice = prompt("Enter F for ferenheit and C for celsius");
// let personInput = parseInt(prompt("Please enter value: "));
// if(personChoice === "F") {
//     // console.log(`$(farToCel(personInput)C`);
// }
byear = 1996;
cyaer = 2022;

function calculateAge(byear,cyear){
    result = cyear - byear;
    return result;
}
calculateAge(byear,cyaer);
console.log("You are " + result + " years old")