//Enhanced Object Literals

let openingHours ={
    sunday:{open:"09:00AM", close:"11:00PM"},
    monday:{open:"10:00AM", close:"10:00PM"},
    tuesday:{open:"11:00AM", close:"8:00PM"}
}

let menuType = "Platinum"

let hotel = {
    name: "Hotel Grand Park",
    Location: "Street No.. xyz, New Delhi",
    categories: ["Chinese", "Italian", "English"],
    mainMenu: ["FoodA", "FoodB", "FoodC"],
    starterMenu: ["SpecialFoodA", "SpecialFoodB", "SpecialFoodC"],
    //openingHours: openingHours //before ES6
    openingHours, //After ES6
    // order: function(){ //Before ES6

    // }
    order(){ //After ES6

    },
    [menuType]: ["Different Food Items..."] //Name of property can be changed dynamically (ES6)
}

console.log(hotel)


// optional chaining(?.)
// suppose we want to check whether this hotel is open on saturday or not
// if open then at what time

// console.log(hotel.openingHours.saturday.open);//throws error as saturday doesnt exist
console.log(hotel.openingHours.saturday?.open);//safe method

//Looping Objects (Object_keys, values, entries)
// Objects are non-iterables but indirectly we can
// for(let elem of openingHours){ //throws error
//     console.log(elem)
// }

//Key(Properties)
let properties = Object.keys(openingHours);
console.log(properties, typeof properties)

for(let elem of properties){
    console.log(elem)
}

//Value
let values = Object.values(openingHours);
console.log(values)

for(let elem of values){
    console.log(elem)
}

//entries
let entries = Object.entries(openingHours) //returns array of arrays
console.log(entries)

for(let [day, {open, close}] of entries){
    console.log(`On ${day} ${hotel.name} opens at ${open} and closes at ${close}`)
}

//sets (collection of Unique values) also works on string
let items = [1, 2, 3, 4 ,5 ,5 ,5, 5, 5]
let itemsSet = new Set(items)
console.log(itemsSet, "size of this set: ",itemsSet.size)
console.log(itemsSet.has(5), itemsSet.has(6))// returns boolean value
itemsSet.add(6)// adds the item in the original set
console.log(itemsSet, itemsSet.has(6), "size of this set: ",itemsSet.size)
itemsSet.delete(6)
console.log(itemsSet)

for(let item of itemsSet){
    console.log(item)
}

let wordsInLetter = new Set("Programmers")
console.log(wordsInLetter)

//maps (used to map values into keys)
//similar to objects but there is no restrictions on what type the key is as it can be bool, etc..
let resaurantMap = new Map();
resaurantMap.set("name", "Bombey Hotel")
resaurantMap.set(1, "Address 1").set(true, "We are open today").set(false, "We are close today")
resaurantMap.set(2, "Address 2")
console.log(resaurantMap)
console.log(resaurantMap.size)
//getting the value
console.log(resaurantMap.get(2))
