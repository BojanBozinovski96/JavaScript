function Person(firstName, lastName, age) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        return firstName + lastName;
    };
    this.getStudentAcademy = function(){
       return Student.academyName;
    }
};

function Student(firstName, lastName, age, academyName, studentId) {
     Object.setPrototypeOf(this, new Person(firstName,lastName,age));
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function () {
        console.log(`The student ${this.firstName} is studing at ${this.academyName}`)
    };

};

let newStudent = new Student('Bojan','Bozinovski', 26, 'SEDC', 7);
newStudent.study();
console.log(newStudent);

let newStudent1 = new Student('Gele','Gelco', 33, 'SEDC', 22);
newStudent1.study();
console.log(newStudent1);


function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, 'Design', studentId))
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function(){
        console.log(`The Student ${this.firstName} is doing an adobe exam!`);

    }
}
 
function CodeStudent(firstName, lastName, age, studentId, hasIndividualProject, hasGroupProject){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, 'Code', studentId))
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = function(){
     console.log(`This is a func`)
    }
}

function NetworkStudent(firstName, lastName, age, studentId,academyPart){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, 'Network', studentId))
    this.academyPart = academyPart;
    this.attendCiscoExam = function() {
        console.log(`The student ${firstName} is doing cisco exam!`)
    }
}





