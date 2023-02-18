// console.log("Connected")


// function keyword // Name of the function // little parentesis ()// { } function body

function logMessage() {
    console.log("Hello from function")

}

// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();

// You can execute this function n times

function sayHello(){
    let name = "Gele"
    console.log("Hello from " + name);

}
// sayHello()




function sayHelloFrom(name) {
           console.log("Hello from " + name);
}

// sayHelloFrom("Gele")

function myFunction(num1, num2){
    let result = num1 * num2;
    console.log("The result is: " + result);
}

// myFunction(1,3); // --> 3
// myFunction(5,7); // --> 35
// myFunction(10,23); // --> 200

function multiply(num1, num2) {
    let result = num1 * num2;
    // console.log("Result is " + result);
    return result;
    
}



let result = multiply(2,4);
console.log(result);


function four(){
    return 4;
    // console.log("Gele")
    // let a = 5 + 7;
}

// four();


// function with parametars and value

function multiplyThreeNumbers(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result;
}

// let multiplyThreeNumbersresult = multiplyThreeNumbers(2, 4 , 2);
// console.log(multiplyThreeNumbersresult);

let multiplyThreeNumbersresult = multiplyThreeNumbers(2, 4 , 2);
console.log(multiplyThreeNumbersresult);

function printMassage(massage) {
    console.log(massage);
}

function isUserMature(age){
    if(age >=18){
        return true;
    }
    else{
        return false;
    }
}

// let isMature = isUserMature(21);

// if(isMature) {
//     printMassage("User is over 18");
// }
// else {
//     printMassage("User is under 18");
// }

if(isUserMature(21)) {
    printMassage("User is over 18");

}
else {
    printMassage("User is under 18")
}


function multiplyTwoNumbers(placeholder1, placeholder2){
    let result = placeholder1 * placeholder2;
    console.log("multuplyTwoNumbers");
    console.log(placeholder1);
    console.log(placeholder2);
    return result;
}

function multiplyFourNumbers(placeholder1, placeholder2, placeholder3 , placeholder4){
        // let result = multiplyTwoNumbers(placeholder1, placeholder2) * multiplyTwoNumbers(placeholder3, placeholder4);
        // return result;
        console.log("multyplyFourNumbers");
        console.log(placeholder1);
        console.log(placeholder2);
        console.log(placeholder3);
        console.log(placeholder4);
        let result1 = multiplyTwoNumbers(placeholder1, placeholder2);
        let result2 = multiplyTwoNumbers(placeholder3, placeholder4);
        let finalResult = result1 * result2;
        return finalResult;
}

let multiplyResult = multiplyFourNumbers(2,3,4,5);
console.log("The result is: " + multiplyResult);