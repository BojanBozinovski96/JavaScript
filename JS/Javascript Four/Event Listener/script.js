


// let element = document.getElementById('username');

// element.addEventListener('blur', greetingFunc);

// function greetingFunc(){
//     let greeting = `Hello ${element.value}`;
//     alert(greeting);
// }

// element.addEventListener('keyup' , function(event){
//  let pTag = document.getElementById("text");
//  pTag.innerText = 'aaaaaaaaa'
// console.log(event);
// let pTag = document.getElementById('text');
//     pTag.innerText = event.target.value;
//     console.log(event.target)
// });

// function test(event){
//     console.log(event);
// }

// element.addEventListener('click', test);

// let element1 = document.getElementById('button');

// element1.addEventListener('click', function(event){
//     let greetings1 = `Bojan ${element1.value}`;

//     alert("My name is Bojan");
// })

// let redDiv = document.getElementById('redDiv');

// function setColorToDiv(event){
//     console.log(event);
//     event.target.style.backgroundColor = 'red';

// }

// redDiv.addEventListener('mousemove', setColorToDiv);

// let myBtn = document.getElementById('myBtn');

// function clearEvent(){
//     alert("Btn was clicked and removed the event");

// }

// myBtn.addEventListener('click', clearEvent);

// myBtn.removeEventListener('click', clearEvent);




// let usernameElement = document.getElementById('username');
// let messageElement = document.getElementById('feedback');

// function checkUsername(minLength){
//     if(usernameElement.value.length < minLength){
//         messageElement.innerText = `Username must be ${minLength} characters or more`;

//     } else {
//         messageElement.innerHTML = " ";
//     }

// }


// usernameElement.addEventListener('blur', function(){
//     checkUsername(5);
// });



// let input = document.getElementById('name');

// document.getElementById('btn').addEventListener('click', function(){
//     console.log(`Somebody entered the name: ${input.value}`);
//     input.value = '';
// })


// let button = document.getElementById('btn');
// let prg = document.getElementById('prg');

// button.addEventListener('click',function(){

// })

// prg.addEventListener('click',function(){
//     prg.style.color = "blue";
//     prg.style.backgroundColor = "green";
//     prg.style.fontSize = "10px";
// })

// let button = document.getElementById('btn');
// let input = document.querySelectorAll('input');
// let p = document.getElementById("par");
// button.addEventListener(onclick,function(){
//     allStuff();
//     p.innerText = "";


// })

// function allStuff(firstname,lastname,email,password){
//     let result = firstname + lastname + email + password;
//     return result;
// }


// function onClick() {
//     let input = document.getElementsByName('input[]');
//     for (let i = 0; i < input.length; i++) {
//         let a = input[i];
//         // output = output + "input[" + i + "].value= "
//         //     + a.value + " ";
//     }
//     // document.getElementById("btn").innerHTML = output;
//     // document.getElementById("po").innerHTML = "Output";
// }


// let inputs = document.getElementById('userInputs').children;

// let result = document.getElementById('result');


// function getUserInfo(inputElements) {
//     let result = "User: ";
//     for(let input of inputElements){
//         result += input.value + " ";

//     }
//    result += "ss registered";
//    return result;
// }

// document.getElementById('submit').addEventListener('click', function(){
//     result.innerText = getUserInfo(inputs);
// })


// let userInput = prompt("Enter your number: ");

// function near_100(x, y) {
//     if (x != y)
//     {
//     x1 = Math.abs(x - 100);
//     y1 = Math.abs(y - 100);

//     if (x1 < y1)
//     {
//       return x;
//     }
//     if (y1 < x1)
//     {
//       return y;
//     }
//     return 0;
//     }
//     else
//       return false;
//       let result = x && y + userInput;
//   }

// near_100(50,60);

// function nearestNumber(a, b){
//     if((a > b && a <= 100) || (a < b && a >= 100)){
//     return a;
//     }
//     else if((b > a && a <= 100) || (b <= a && a > 100)){
//     return b;
//     }
//     }

//     nearestNumber(5,10);




// function examAverage(arr) {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     let result1 = result / arr.length;

//     return result1;

// }


// function checkIfStudentPassed(studentAverege, passedGrades) {
//     let result = true;
//     result = studentAverege >= passedGrades;
//     return true;


// }






















// function printIfStudentPassed(arr, averege) {
//     let studentAverege = examAverage(arr);
//     let hasStudentPassed = checkIfStudentPassed(studentAverege, averege);

//     if (hasStudentPassed) {
//         alert("Student has passed");
//     }
//     else {
//         alert("Student has not passed")
//     }

// }

// let array = [1, 3, 5, 6, 8];
// let avg = 6;
// printIfStudentPassed(array,avg);


// let me = {
//     name: "Gele",
//     age: 33,
// //     married: true,
//     address: "skopje",
//     timezone: "Hungary",
//     checkForMe: function(){

//     }
// }

// me.name = "Gelco";
// me.age = 37;
// me.married = false;
// me.address = "veles";
// me.timezone = "Italy";
// console.log(me);


// let trainer = {
//     firstName : "Stefan",
//     age: 30,
//     lastName : "Stefanovski",
//     academy: "SEDC",
//     lecture: "Objects",


// }

// delete trainer.lecture;
// getFullName: function(){
//     let fullName = `${trainer.firstName} ${trainer.lastName}`;
//   }
// console.log(trainer);

// let carObject = {
//     model: "Nissan",
//     color: "black",
//     year: 2023,
//     fuel: "gasoline",
//     fuelConsumption: 6.6,



//     fuelConsumptionForDistance: function (distance) {
//         return distance * (this.fuelConsumption / 100);


//     }

// }

// console.log(carObject);


let regForm = document.getElementById("regF");

let allinputs = regForm.children;

let button = document.getElementById("btn");

let myArray = ["firstName","lastName","age"];

let student = {
    firstName: "",
    lastName: "",
    age: 0,

    saveStudent: function(){
      
    }
    
}
addEventListener.button(onclick,this.saveStudent);

student.firstName = "Gele";
student.lastName = "Angele";
student.age = 30;
