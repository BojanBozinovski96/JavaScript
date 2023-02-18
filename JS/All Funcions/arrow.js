// ARROW FUNCTION

// Without parameters

let funcArrowWithOutParameters = () => {
    console.log("Hello");
};

funcArrowWithOutParameters();

// With parameters


let funcArrowWithParameters = num => 1;

let funcNoArrow = function (num) {
    return num + 1;
}

let funcArrowWithMoreParameters = (num1, num2, num3) => num1 + num2 + num3;



console.log(funcArrowWithMoreParameters(1, 2, 1));


let funcArrowWithMoreLines = () => {
    //lots of code
    console.log("Hello from mlaf");
    // more code....
    return;
    //we must return a result
}



let basicArithmeticOperations = (num1, num2, calculation) => calculation(num1, num2);

let result = basicArithmeticOperations(5, 5, (a, b) => a * b);
console.log(result);

let num1 = 10;
let num2 = 20;
let calcucaltion = (a, b) => {
    let c = 30;
    return a + b + c;
}
let result1 = basicArithmeticOperations(num1, num2, calcucaltion);
console.log(result1);

(function myFunc() {
    let num1 = 2;
    let num2 = 2;
    let result = num1 + num2;




    console.log(result);
})();


let result3 = (function sum(a, b) {
    return a + b;

})();
//  console.log(result3);

(() => {
    let a = 3;
    let b = 5;
    let c = {
        a: 3,
        a: 4,
        c: 12,
    };
    let result5 = a + b + c.a;
    console.log(result5);
})();

let multiply = (num1, num2) => num1 * num2;

let result6 = multiply((function (a, b) {
    return a + b;
})(5, 5), 7);
console.log(result6);

let idGeneratorObj = {
    id: 0,
    generateId: function () {
        this.id++
        return this.id;
    }
};

let idGenerator = (function () {
    let id = 0;
    return function () {
        id++
        return id;
    }
})();

for (let i = 1000; i > 0; i--) {
    console.log(idGenerator());

}

let appConfig = (function () {
    let obj = {
        appSecret: "secret",
        baseApiUrl: "www.google.com",
        appName: "some app",
        appTitle: "app title"
    };
    function getSecret() {return obj.appSecret};
    function getApiTitle() {return obj.appTitle};
    return {
        getApiTitle,
        getSecret
    };
})();
