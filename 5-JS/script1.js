//ES6 [EcmaScript 6]

let hotel = {
    name: "Hotel Grand Park",
    Location: "Street No.. xyz, New Delhi",
    categories: ["Chinese", "Italian", "English"],
    mainMenu: ["FoodA", "FoodB", "FoodC"],
    openingHours: {
        sunday:{open:"09:00AM", close:"11:00PM"},
        monday:{open:"10:00AM", close:"10:00PM"}
    }
}

//De-structuring of "Objects"
let{name, Location, mainMenu} = hotel; // property name same as defined
console.log(name, Location, mainMenu)

//set custom name to object properties
let{name: hotelName, Location: hotelLocation, mainMenu: hotelMainMenu} = hotel;
console.log(hotelName, hotelLocation,hotelMainMenu)

//setting default value
let {Menu = ["newMenu"]} = hotel;
console.log(Menu)

//De-structuring nested objects
let {openingHours} = hotel;
console.log(openingHours)
let {monday} = openingHours
console.log(monday)

let{sunday:{open, close}} = openingHours;
console.log(open, close)

// Array De-structuring
let items = [1, 2, 3, 4, 5]
let [x, y, z, p] = items
console.log(x, y, z, p)
console.log(x, y, z, p)

let [first, , third] = hotel.categories //We can get specific elements of an array
console.log(first, third)
