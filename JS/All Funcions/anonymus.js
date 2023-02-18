// Regular function

function nameOfTheFunction(parameterOfTheFunction){
    //Function bodyy
    // code;
}

// Call
nameOfTheFunction();


// anonymus function
let anonymusFunction = function(){
 console.log("hello");
}

//call
anonymusFunction();

let array = [ 1, 2 , 3 , function(){return 2 + 2}, 4, 5 ,6];


// function as parametar

let anonymousCalculations = function(num1,num2, calculation){
    //input parameters
    //num1 = 1;
    //num2 = 2;
    //calcucaltion = functions(a, b){
    //     return a + b;
    // }
    console.log(num1);
    console.log(num2);
    console.log(calculation);

    let result = calculation(num1,num2);
    return result;
};

let result = anonymousCalculations(1,2,function(a,b){
    return a + b;
});

console.log(result);


let num1 = 5;
let num2 = 3;
let calcucaltion = function(a,b){
    return a - b;
}

let result1 = anonymousCalculations(num1,num2, calcucaltion);
console.log(result1);


let result2 = anonymousCalculations(5, 5, function(a,b){
    let obj = {
        name: "Gelco",
        age:33
    };
    let array = [1, 2 , 3 , 4, 5, 6];
    let c = 10;
    return a + b + c + obj.name + array[5];

});
console.log(result2);


let result3  = anonymousCalculations(1,2,function(a,b,c,d,e = 10){
    let result = a + b + c + d + e;
    return result;
})
console.log(result3);


// let result4 = anonymousCalculations(1, 2 , function(a,b,c, d = 5){

// })




