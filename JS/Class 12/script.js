function Vehicle(id, name, batch, price){
    this.id = id;
    this.name = name;
    this.batchNo = batch;
    this.price = price;

   this.company = 'move.inc';

   this.printVehicle = function(){
    console.log(` ${this.id}. ${this.name}, Batch : ${this.batchNo}, ${this.price}`);
   }
}


let vehicle = new Vehicle(1, 'Yugo', 'S120', 200);

console.log(vehicle);


function WheeledVehicle(wheels, name){
    this.wheels = wheels;
    this.name = name;

}


let wheeeldVehicle = new WheeledVehicle(4,'Mazda');

wheeeldVehicle.__proto__ = new Vehicle(2,'Yugo', 'a123', 3000);

console.log(wheeeldVehicle);


WheeledVehicle.prototype = new Vehicle(2,'Yugo', 'a123', 3000);


function WheeledVehicle1(wheels, name, id , batch, price){
    Object.setPrototypeOf(this, new Vehicle(id,name,batch,price));
    this.wheels = wheels;
    this.name = name;

}

let ingeritedVehicle = new WheeledVehicle1(4,'Nissan', 34, 'A143242', 5000);

console.log(ingeritedVehicle);

function Car(doors, fuelCapacity, id, name, batch, price){
    Object.setPrototypeOf(this, new WheeledVehicle1(4,name, id, batch, price));
    this.doors = doors;
    this.fuelCapacity = fuelCapacity;
}


let newCar = new Car(5, 100, 12, 'Audi', 'a1232143',5000);
console.log(newCar);

