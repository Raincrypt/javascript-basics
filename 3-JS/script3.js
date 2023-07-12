//Static method(method which is not present on constructor "prototype" property but "constructor" itself)

class Car {
    constructor(color, model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log(`Color is: ${this.color} and Model is ${this.model}`)
    }
}

//static Method
Car.breakMethod = function(){
    console.log("this is a break method of car")
}
Car.breakMethod()

//class inheritance, let's say the above class is Parent class

//child class
class Bike extends Car{
    constructor(color, model, engineBlock){
        super(color, model) // this passes properties to the parent class
        this.engineBlock = "V2";
    }
}
let newBike = new Bike("Black", 2023)
console.log(newBike)