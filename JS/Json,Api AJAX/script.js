// let g3 = `{
//     "trainer" : "Trainer name",
//     "assistant" : "Assistant name",
//     "students" : [
//         "Bob",
//         "Jill",
//         "Samantha",
//         "Greg",
//         "Chris"
//     ],
//     "acadamy" : "Code"
// }`;
// console.log(typeof(g3));
// console.log(g3);

// let g3JsObject = JSON.parse(g3);

// console.log(g3JsObject);
// console.log(g3JsObject.students[0]);

// document
//     .getElementById('btn')
//     .addEventListener('click', function () {
//         let xhr = new XMLHttpRequest();
//         xhr.onload = function () {
//             console.log("Request is sent!");


//             if (xhr.status >= 200 && xhr.status < 300) {
//                 console.log("Request success");
//                 console.log(xhr.response);
//                 let response = JSON.parse(xhr.response);
//                 console.log(response);
//             } else {
//                 console.log(xhr.responseText);
//             }
//         }
//         xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json");
//         xhr.send();
//     })
// $(document).ready(function() {
//         document
//         .getElementById('btn1')
//         .addEventListener('click', function(){
//             $.ajax({
//                 url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
//                 method: "GET",
//                 success: function(response){
//                   console.log("Request success!");
//                   console.log(response);
//                   let responseObj = JSON.parse(response);
//                 },
//                 error: function(response){
//                   console.log("Request failed");
//                   console.log(response);
//                 }
//             });
//         });
//     });
// $(document).ready(function() {
//     document.getElementById('btn1')
//     .addEventListener('click', function() {
//         $.ajax({
//             url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
//             method: "GET",
//             success: function(response) {
//                 console.log("Request success!");
//                 console.log(response);
//                 let responseObj = JSON.parse(response);
//                 console.log(responseObj);
//             },
//             error: function(response) {
//                 console.log("Request failed!");
//                 console.log(response);
//             }
//         })
//     })
// });




// function printPeople(people){
//     let ul = document.getElementById('result');

//     let html = " ";
//     for(let person of people){
//         html += `<li>Name: ${person.name} Craft : ${person.craft}</li>`;
//     }
//     ul.innerHTML = html;
// };

// $(document).ready(function() {
//         document
//         .getElementById('btn1')
//         .addEventListener('click', function(){
//             $.ajax({
//                 url: "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",
//                 method: "GET",
//                 success: function(response){
//                   console.log("Request success!");
//                   console.log(response);
//                   let responseObj = JSON.parse(response);
//                 },
//                 error: function(response){
//                   console.log("Request failed");
//                   console.log(response);
//                 }
//             });
//         });
//     });


// document.getElementById('btn3')
//     .addEventListener('click', function () {
//         fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
//             .then(function (response) {
//                 console.log(response);
//                 let data = response.json();
//                 return data;
//             }).then(function (data) {
//                 console.log(data);
//                 printStudents(data.students);
//                 printAcademy(data.academy);
//             }).catch(function (error) {
//                 console.log(error);
//             });

//     });

// function printStudents(students) {
//     let ul = document.getElementById('result');

//     let html = " ";
//     for (let student of students) {
//         html += `<ul>Name: ${student}</ul>`;
//     }
//     ul.innerHTML = html;
// };

// function printAcademy(academy) {
//     let h1 = document.getElementById('names');
//     let html = " ";
//     html += `<h1>Name of acadamy: ${academy}</h1>`;
//     h1.innerHTML = html;
// };

// document.getElementById('btn')
// .addEventListener('click', function(){
//     fetch('https://swapi.dev/api/people/1')
//     .then(function(response){
//         let data = response.json;
//         return data;
//     }).then(function(data){
//       printPersonName(data.name);
//     })
// })

function printStats(result, response){
    let resultTable = result.getElementsByTagName("tbody")[0];
    resultTable.innerHTML = "";
    resultTable.innerHTML += `
    <tr> 
        <td> Height </td>
        <td> ${response.height}cm </td>
    </tr>
    <tr> 
        <td> Weight </td>
        <td> ${response.mass}kg </td>
    </tr>
    <tr> 
        <td> Eye Color </td>
        <td> ${response.eye_color} </td>
    </tr>
    <tr> 
        <td> Hair Color </td>
        <td> ${response.hair_color} </td>
    </tr>`;
}




function printPersonName(name){
    let h1 = document.getElementById('name');
    let html = " ";
    html += `<h1>Name of person: ${name}</h1>`;
    
    h1.innerHTML = html;
}
document.getElementById('btn')
    let callBtn = document.getElementById("callBtn");
    let result = document.getElementById("result");
    callBtn.addEventListener('click', function () {
        fetch('https://swapi.dev/api/people/1')
            .then(function (response) {
                console.log(response);
                let data = response.json();
                return data;
            }).then(function (data) {
                console.log(data);
                printPersonName(data.name);
                printStats(data.result,data.response);
                
            }).catch(function (error) {
                console.log(error);
            });

    });