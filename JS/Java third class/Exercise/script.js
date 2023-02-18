// function sumNumbers(num1, num2){
//     let result = num1 + num2;
//     return result;
// }
// function subNumbers(num1, num2){
//     let result = num1 - num2;
//     return result;
// }
// function multiplyNumbers(num1,num2){
//     let result = num1 * num2;
//     return result;
// }
// function divideNumbers(num1,num2){
//     let result = num1 / num2;
//     return result;
// }

// let sumResult = sumNumbers(2,4);

// let subResult = subNumbers(10,5)

// let multiplyResult = multiplyNumbers(5,5);

// let divideResult = divideNumbers(10,2);
// console.log(subResult);
// console.log(sumResult);
// console.log(multiplyResult);
// console.log(divideResult);

// function calculateLoan(amount,months, intrest, name){
//     console.log("amount: " + amount);
//     console.log("Months: " + months);
//     console.log("Intrest: " + intrest);
//     console.log("Name: " + name);
// }

// calculateLoan(1000,12,5, "Gele");

// calculateLoan(2000,24,10, "Gelco", "SAYHELLO", 1000);

// calculateLoan(1000,36);

// calculateLoan();


function makeReq(url,username,password,timeout = 100){
         console.log(url);
         console.log(username);
         console.log(password);
         console.log(timeout);

}

makeReq("asd","poiu","123");

function calculateLoan(amount,name,months = 24 , intrest = 5){
    console.log("Amount: " + amount);
    console.log("Months: " + months);
    console.log("Name: " + name);
    console.log("Intrest: " + intrest);
}

calculateLoan(1000,"Gelco");