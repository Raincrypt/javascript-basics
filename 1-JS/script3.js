"use strict" //errors are shown properly

console.log(Math) //Math is an object used to perform mathematical calculation
let num = 7.9254364574
console.log(Math.trunc(num))

let random = Math.random()
console.log(random)//random generates values between 0-1
console.log(Math.round(random*100)) //generally used like this

//Objects

let car = {
    color: "Black",
    model: "2022",
    company: "Honda"
}

console.log(car)
console.log(car.color) //preffered way
console.log(car["company"])

//modify object
car.color = "White";
console.log(car.color)

//Delete Property
let returnValue = delete car.company
console.log(car["company"], returnValue)

//Function vs method
const currentyear = 2023
let human = {
    ageCalculate: function(birthyear){
        let age = currentyear - birthyear;
        return age;
    }
}
console.log(human.ageCalculate(2001)) //method is function called via object

//this keyword
//"this" keyword represent the object

let person = {
    firstName: "Mousom",
    lastName: "Sarkar",
    city: "Delhi",
    education: "BE-COPC",
    college: "Thapar Institute of Technology",
    getSummary: function(){
        return `${this.firstName} ${this.lastName} lives in ${this.city}. He has done ${this.education} in ${this.college}.`
    },
    getReturn: function(){
        return this
    }
}

console.log(person.getSummary())
console.log(person.getReturn())

//forEach method of array
//Also called functional programming
let people = ["Aarushi", "Mousom", "Adam", "Eve"]
people.forEach((element) => {
    console.log(element)
})

let blocklist = [{username: "Adam", reason: "Abusive Content"}, {username: "Eve", reason: "Copyright Issue"}]
for(let i = 0; i < blocklist.length; i++){
    console.log(`${blocklist[i].username} is banned due to ${blocklist[i].reason} (using for loop)`)
}

blocklist.forEach((element) =>{
    console.log(`${element.username} is banned due to ${element.reason} (using forEach)`)
})
//------------------------------------------------------------------------------------------
//call and apply method
//We can manually set the value of "this" keyword using "call and apply"

let mainPlane = {
    airline: "Fly India",
    iatacode: "FI",
    bookings: [],
    book: function(flightNum, name){
        console.log(`${name} Booked Flight on ${this.airline} with flight number ${this.iatacode}${flightNum}`)
        this.bookings.push({
            flightName: this.airline,
            name: name,
            flightNumber: this.iatacode + flightNum 
        })
    }
}
mainPlane.book(123223, "Mousom")
mainPlane.book(579982, "Aarushi")
console.log(mainPlane)
//New Airplane Launched of same group

let childPlane = {
    airline: "Drown India",
    iatacode: "DI",
    bookings: [],
}
let book = mainPlane.book;
console.log(book)

//in "strict-mode" no output will be shown as "this" keyward is undefined
//book(665433, "Gautam") //book is a regular function and can't understand "this" keyword

// solution is to use "call" method
book.call(childPlane, 665433, "Gautam")
console.log(childPlane)
book.call(mainPlane, 556677, "Bhavika")
console.log(mainPlane)

//apply method
book.apply(childPlane, [112233, "Himanshi"])
//the only difference is that in apply all arguments can be given in an array 

//bind method
function fullName2() { //didn't work with arrow function
    console.log(`${this.firstName} ${this.secondName}`)
}

let user = {
    firstName: "Akshit",
    secondName: "Chand"
}

let greet = fullName2.bind(user)
greet()

//"reference" are passed to variable
let arr = [1, 2, 3, 4, 5, 6]
let getRef = arr
console.log(`Original array ${arr}`)
console.log(`getRef array ${getRef}`)

getRef[6] = 7
getRef.shift() //removes first element

console.log(`Original array ${arr}`) //also changed
console.log(`getRef array ${getRef}`)

// pass by value
let getValue = [...arr]
getValue[4] = 22
console.log("pass-by-value")
console.log(`Original array ${arr}`) //Not changed
console.log(`getRef array ${getValue}`)

//for-in loop (each iteration returns a "key" of object)
let ride = {
    model: "RX7",
    color: "white",
    company: "Mazda"
}
let x = ""
for(let key in ride){
    x = `${x} ${ride[key]}`
}
console.log(x.trim())

//spread operator in object
const user1 = { name: "Heisenberg", age: 17};
const admin = { admin: true, ...user1 }; //adds all the properties of user1 to admin

console.log(admin);

//destructuring objects

const user2 = { 
    name: "Heisenberg", 
    age: 18, 
    fullName: { 
        first: "Walter", 
        second:"White"
    }
};

const { name: myName } = user2;
console.log(myName); //Heisenberg

const {fullName:{first:myFirstName}} = user2;
console.log(myFirstName); //Walter