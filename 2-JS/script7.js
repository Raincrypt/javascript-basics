// Local Storage
//preserves even after removing line of code
// saves according to host
// stores string
// set, get, update item

console.log(localStorage)

localStorage.setItem("name", "Heisenberg")// stores key value pair setItem(key, value)
localStorage.setItem("about", "learning local storage")
localStorage.setItem("number", 69)
console.log(localStorage)

console.log(localStorage.getItem("name"))

localStorage.setItem("name", "Not Heisenberg")
console.log(localStorage.getItem("name"))

localStorage.clear()
console.log(localStorage)

//storing array of objects
let vehicles = [
    {
        company: "honda",
        model: 2009
    },
    {
        company: "volvo",
        model: 2019
    }
]

let stringOfVehicle = JSON.stringify(vehicles) // converts to string
console.log(stringOfVehicle, typeof stringOfVehicle)
localStorage.setItem("vehicles", stringOfVehicle)
console.log(localStorage)

let storedData = localStorage.getItem("vehicles")
console.log(storedData)
let storedDataObject = JSON.parse(storedData)// converts to objects
console.log(storedDataObject, typeof storedDataObject)

localStorage.clear()
console.log(localStorage)
