//ES6 Classes
//Better than previous method
//these classes will implant prototypical inheritence behind the scenes
//Classes are not Hoisted
//also known as first class citizen as it can be used as an argument or return
//excuted in strict mode

class Car {
    constructor(color, model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log(`Color is: ${this.color} and Model is ${this.model}`)
    }
}
Car.prototype.breakMethod = function(){
    console.log("Break Method")
}

let honda = new Car("Black", 2023)
console.log(honda)
honda.startEngine()
honda.breakMethod()

//setter and getters [introduced in ES6]
//they allow you to define Object accessors(compuuted properties)

class Bike {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
    bikeFunction() {
        console.log(`Bike color: ${this.color} and Bike model: ${this.model}`);
    }
    get _bkeFunction(){
        console.log(`Bike color: ${this.color} and Bike model: ${this.model} (using getter)`)
    }
    get description(){
        return `Bike color: ${this.color} and Bike model: ${this.model} (using getter)`
    }
    set changeColor(color){
        console.log(this.color = color)
    }
}

let dugati = new Bike("Black", 2023)
console.log(dugati)
dugati.bikeFunction() //accessing as function
dugati._bkeFunction //accessing as properties

dugati.changeColor = "blue" // set as property
console.log(dugati)
