

// // console.log(document);

// let myHeader = document.getElementById("myTitle");
// console.log(myHeader);

// let myParagraph = document.getElementsByClassName("myParagraph");
// console.log(myParagraph);
// console.log(myParagraph[0]);

// let myParagraph1 = document.getElementsByClassName("second");
// console.log(myParagraph1);


// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);


// let texts = document.getElementsByTagName("text");
// console.log(texts);


// let firstParagraph = document.querySelector("p");
// console.log(firstParagraph);
// let allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// let firstParagraphByClass = document.querySelector(".myParagraph");
// console.log(firstParagraphByClass);
// let allParagraphsByClass = document.querySelector(".myParagraph");
// console.log(allParagraphsByClass);

// let firstHeaderById = document.querySelector("#myTitle");
// console.log(firstHeaderById);
// let allHeadersById = document.querySelectorAll("#myTitle");
// console.log(allHeadersById);

// let myParagraph = document.getElementsByClassName("myParagraph");
// let firstElement = myParagraph[0];
// let nextSibling = firstElement.nextElementSibling;
// console.log(nextSibling);
// let prevSibling = firstElement.previousElementSibling;
// console.log(prevSibling);


// let myParagraph = document.querySelector('.myParagraph');
// let myParagraphParentElement = myParagraph.parentElement;
// console.log(myParagraphParentElement);

// let allChildren = myParagraphParentElement.children;


// let elementParagraph = document.querySelector(".second");
// elementParagraph.style.color = "yellow";
// // elementParagraph.style.display = "none";
// elementParagraph.style.backgroundColor = "blue";

// let firstDiv = document.getElementById("first");
// console.log(firstDiv);
// let allParagraphs = document.getElementsByClassName("paragraph");
// console.log(allParagraphs);
// let lastDiv = document.getElementsByTagName("div");
// let firstElement = lastDiv[1];
// let nextDiv = firstElement.nextElementSibling;
// console.log(nextDiv);
// let thirdHeader = document.getElementsByTagName("h3");
// console.log(thirdHeader);
// let headerInLastDiv = lastDiv.querySelector()

let userInput = prompt("Enter your value :");
let parsedInput = parseInt(userInput);
weightInChickens(userInput);

function weightInChickens(input){
    
    
    
    let result = userInput * 2 ;
    return result;

}
 
weightInChickens(userInput);
