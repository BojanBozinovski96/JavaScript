class Vehicle {
    constructor(id, name, batch, price) {
        console.log('In constructor');
        this.id = id;
        this.name = name;
        this.batchNo = batch;
        this.price = price;
        this.company = 'Move.inc';
    };

    printVehicle() {
        console.log(`${this.id}. ${this.name}, Batch: ${this.batchNo}, ${this.price}`)
    }


}


let yugo = new Vehicle(1,'Toyota', 'A123124', 4000);

console.log(yugo);


class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels){
        super(id, name, batch, price);
        this.wheels = wheels;
    }

    driveVehicle(){
        console.log(`We are driving a ${this.name} on ${this.wheels} wheels!`);
    }

}


let bike = new WheeledVehicle(12,'Bike', '12G', 700, 2);
console.log(bike);


bike.driveVehicle();
bike.printVehicle();

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, doors, ac){
        super(id,name,batch,price,4);
        this.doors = doors;
        this.airConditioning = ac;

        if(ac){
            this.price += 400;
        }
    }

    buyCar(money){
        if(money >= this.price){
            console.log('Congrants you bought a car');
        } else {
           console.log(`You need ${this.price - money} more to buy this car!`);
        }
    }

    static addAc(car) {
        if(!car.airConditioning){
            car.airConditioning = !car.airConditioning;
            car.price += 400;
            console.log(`The car has AC now and it cost ${car.price}`);
        } else {
            console.log(`The car has already AC`);
        }
    }
}

let car = new Car(99,'Yugo', 'A1141', 500, 4, true);

console.log(car);

car.buyCar(800);

Car.addAc(car);


class ElectricCar extends Car {
    constructor(id, name, batch, price, doors, owner){
        super(id, name, batch, price, doors, true);
        this.owner = owner;
        
    }

    get owner(){
        console.log(`We are getting of the owner. Please wait.....`);
        return `The car is owned by: ` + this._owner;
    }

    set owner(ownerName){
        console.log(`We are setting the name of the owner. Please wait.....`);

        ownerName.length > 1 ? this._owner = ownerName : (() => {throw new Error(`Owner name too short`)})();

    }
}

let myElectiCar = new ElectricCar(100, 'Tesla', 'Z4341', 20000, 3, 'Gele');

console.log(myElectiCar);

console.log(myElectiCar.owner);

myElectiCar.owner = 'Gelco';


function checkIfElectricCar(input){
    if(input instanceof ElectricCar){
        console.log('It is electric');
    } else {
        console.log('It is diesel');
    }
}

checkIfElectricCar(myElectiCar);
checkIfElectricCar(car);

