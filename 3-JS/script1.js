//Object oriented programming

//We cannot use "arrow" function as cunstructor

//1. new {object} created empty initially
//2. "this" = {object}
//3. object linked to prototype
//4. functional automatically return {object}

let Car = function(color, model){
    //instance properties
    this.carColor = color //convention is that this.color = color (use the same property name as the argument)
    this.carModel = model
    //not a good practice instead we use prototype
    this.carFunction = function(){
        console.log("Method")
    }
}
let instanceOfCar1 = new Car("Black", 2023)
let instanceOfCar2 = new Car("Blue", 2021)
console.log(instanceOfCar1, instanceOfCar2) //good when creating objects with same properties
console.log(instanceOfCar1 instanceof Car)//(returns boolean value) checks if instanceOfCar1 is a instance of Car()

//Prototype
let Bike = function(color, model){
    this.color = color;
    this.model = model;
}
Bike.prototype.bikeFunction = function(){
    console.log(`Bike color: ${this.color} and Bike model: ${this.model}`)
}
console.log(Bike.prototype)
let instanceOfBike1 = new Bike("Black", 2023)
let instanceOfBike2 = new Bike("Blue", 2021)
instanceOfBike1.bikeFunction()

//We can also set properties using prototypes
Bike.prototype.company = "Dugati"
console.log(Bike.prototype)
console.log(instanceOfBike1.__proto__)//same result as above used when you dont have access to the object

