

// while(expression){
//     // all the code that needs to be repeted goes here
// }

// The application will continue only when the expression evaluates to false

// let counter = 0;

// while(counter <=10){
//     console.log("Itreation: " + counter);
//     counter += 1;
// }

// let bigNumber = 1234567890;

// while(bigNumber / 10 !== 0){
//     let number = bigNumber % 10;
//     console.log("Last number: "  + number);
//     bigNumber = Math.floor(bigNumber / 10);
// }


// let students = ["Trajan" , "Todor", "Bob", "Jill"];

// let isStudentFound = false;

// while(isStudentFound){
//     if(students.includes("Bob")){
//     isStudentFound = true;
//     }               
// }


// let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri','Sat','Sun'];
// let index = 0;

// while(index < days.length) {
//     console.log(days[index]);
//     index++;
// }


//Excersise

// let numbers = [34, 5, 9, 7, 45, 12, 89, 2, 33, 77];

// let anotherArray = [34, 8 , 100 , 7 , 45, 12, 22, 2, 33, 77, 14, 15];

// function findLargestValue(inputArray){
//     let counter = 0;
//     let max = -Infinity;

//     while(counter < inputArray.length){
//         console.log(`counter : ${counter}`);
//         console.log(`inputArray[${counter}]: ${inputArray[counter]}`);

//         if(inputArray[counter] > max){
//             max = inputArray[counter];

//         }
//             console.log(`Max : ${max}`);
//             counter += 1;
//     }
//     return max;
// }

// let maxOfNumbers = findLargestValue(numbers);
// console.log(maxOfNumbers);



// function sumPow(num1, num2){
//     let result = 0;
//     let i = num1;
//     while (i <= num2){
//         result += Math.pow(i,2);
//         i++;
//     }
//     return result;

// }

// console.log(sumPow(101,101));

let testArray = [1, 2, 1, 3, 1, 4, 5, 6]
// let num1 = 0;
// let num2 = 0;
let number = 0;
function findNumber(array, number) {
    let result = 0;
    for (let i = 0; number < testArray.length; number++) {
    }
    if (array[i] === number) {
        number++;
    }
    console.log(number);
    let input = parseInt(prompt("Enter a number :" + number));

}



let otherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let otherType = 0;


function isOddEven(n)
{
   if ((n ^ 1) == (n + 1)){
   return true;
   }
   else{
   return false;
   }
}
let output=document.getElementById("number");
let num = 100;
isOddEven(num)
? output.innerHTML = num + " Even"
: output.innerHTML = num + " Odd" ;