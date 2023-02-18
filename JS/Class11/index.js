// function Vehicle(id, name, batchNo, price){
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = 'move.inc';
    

//     this.printVehicle = function() {
//         console.log(`${this.id}, ${this.name}, BATCH: ${this.batchNo}, ${this.price}`);

//     }


// }

// let vehicle = new Vehicle(10, 'lada', '123AX0', 1222)
// console.log(vehicle);

// let wheeledVehicle = Object.create(new Vehicle(12, 'Yugo', '258', 500));
// console.log(wheeledVehicle);

// wheeledVehicle.drive = function () { console.log('WROOOM!')};
// let car = Object.create(wheeledVehicle);
// car.fuelTank = 32;

// car.drive();
// car.printVehicle();


// console.log(car);


// let wheeledVehicle2 = {};
// wheeledVehicle2.__proto__ = new Vehicle(12, 'Yugo', '23532', 600);
// console.log(wheeledVehicle2);


// wheeledVehicle.name = 'Maruti';



// console.log(wheeledVehicle.__proto__.name);
// console.log(wheeledVehicle.name);


// function Vehicle(id, name, batchNo, price){
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = 'move.inc';
    

//     this.printVehicle = function() {
//         console.log(`${this.id}, ${this.name}, BATCH: ${this.batchNo}, ${this.price}`);

//     }


// }


// function WheeledVehicle(wheels,name){
//     this.wheels = wheels;
//     this.name = name;

//     this.drive = function(){
//         console.log(`Driving on ${this.wheels} wheels`);
//     }
// }


// WheeledVehicle.prototype = Object.create(new Vehicle());

// let car = new WheeledVehicle(4,'Yugo');
// car.price = 200;
// car.id = 2;
// car.batchNo = '123AX';
// car.drive();
// car.printVehicle();
// console.log(car);


// WheeledVehicle.prototype.stop = function(){
//     console.log(`The vehicle ${this.name}, stopped.`);
// }

// car.stop();
// car.__proto__.stop();



function Vehicle(id, name, batchNo, price){
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = 'move.inc';
    

    this.printVehicle = function() {
        console.log(`${this.id}, ${this.name}, BATCH: ${this.batchNo}, ${this.price}`);

    }


}

function WheeledVehicle(id, name, batch, price, wheels) {
    // this.__proto__ = new Vehicle(id, name, batch, price);
    Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));
    this.wheels = wheels;
    this.drive = function(){
        console.log(`Driving on ${this.wheels} wheels`);
    }
}

let someWheeledVehile = new WheeledVehicle(1, 'Yugo', '222b', 700, 4);

// console.log(someWheeledVehile);
// console.log(someWheeledVehile.name);
// someWheeledVehile.drive();
// someWheeledVehile.printVehicle();


function Car(id, name, price, batch, doors, fuelCapacity){
    Object.setPrototypeOf(this, new WheeledVehicle(id, name, price, batch, 4));
    
    this.fuelCapacity = fuelCapacity;
    this.drift = function() {
        console.log(`The ${this.name} is drifting!`);
    }
    
}

let someCar = new Car(99, 'Ferrari', 2_000_000, 'b2', 3, 100);
console.log(someCar);