// let students = [
// 	{firstName: "Bob", lastName: "H", grade: 5, age: 19},
// 	{firstName: "Mel", lastName: "B", grade: 2, age: 33},
// 	{firstName: "Jill", lastName: "M", grade: 3, age: 15},
// 	{firstName: "Lucky", lastName: "J", grade: 5, age: 18},
// 	{firstName: "Strike", lastName: "K", grade: 4, age: 16},
// 	{firstName: "Eric", lastName: "I", grade: 1, age: 17}
// ]
// let students2 = [
// 	{firstName: "Bob", lastName: "H", grades: [
// 		{subject: "Math", grade: 2},
// 		{subject: "Science", grade: 3}
// 	], age: 19},
// 	{firstName: "Mel", lastName: "B", grades: [
// 		{subject: "Math", grade: 3},
// 		{subject: "Science", grade: 5}
// 	], age: 33}
// ]

// function mapArray(arr, mappingFnc){
//     let resultArray = [];
//     for(let item of arr){
//         resultArray.push(mappingFnc(item));

//     }
//     return resultArray;
// }

// let mappedStudents = mapArray(students, student => {
//     return {
//         fullName: student.firstName + " " + student.lastName,
//         age: student.age
//     }
// })

// // console.log(mappedStudents);

// // let mappedStudents1 = mapArray(students, student => ({name: student.firstName, grade: student.grade, isAdult: student.age >= 18}));


// let mappedStudents2 = students.map(student => {
//     return {
//         fullName: student.firstName + " " + student.lastName,
//         age: student.age
//     }
// })
// console.log(mappedStudents2);


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];


// let numbersPlusTen = numbers.map(x => x + 10);
// console.log(numbersPlusTen);
// console.log(numbers);



// function filterArray(arr, filter) {
//     return arr.filter(filter);
// }
   

let person = {
    name: "John Doe",
    sayHello: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  let sayHello = person.sayHello.bind(person);
  

  sayHello();


