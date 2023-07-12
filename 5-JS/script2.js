let hotel = {
    name: "Hotel Grand Park",
    Location: "Street No.. xyz, New Delhi",
    categories: ["Chinese", "Italian", "English"],
    mainMenu: ["FoodA", "FoodB", "FoodC"],
    starterMenu: ["SpecialFoodA", "SpecialFoodB", "SpecialFoodC"],
    openingHours: {
        sunday:{open:"09:00AM", close:"11:00PM"},
        monday:{open:"10:00AM", close:"10:00PM"}
    }
}

//for-of loop //can be used for destructuring arrays
let menu = [...hotel.mainMenu, ...hotel.starterMenu]
console.log(menu)

for(let elem of menu){// useful when size of array is not known
    console.log(elem)
}

for(let elem of menu.entries()){// makes an array of array
    console.log(elem)
    console.log(`${elem[0] + 1}: ${elem[1]}`)
}

for(let [i, elem] of menu.entries()){
    console.log(elem)
    console.log(`${i}: ${elem}`)
}

// spread Operator
let nums = [1, 2, 3, 4]
console.log(nums)
console.log(...nums) //spread operator

let newArr = [0, ...nums, 5, 6]
console.log(newArr)

let updatedMainMenu = [...hotel.mainMenu, "FoodD", "FoodE"]
console.log(updatedMainMenu)

//join 2 arrays
let joinedArray = [...nums, ...newArr]
console.log(joinedArray)

//Create shallow copy using spread operator
let copyArray = [...updatedMainMenu]
copyArray[0] = "UpdatedFood"
console.log(copyArray)
console.log(updatedMainMenu)

//Spread operators can be used with strings too
let passion = "My passion is gaming";
console.log(...passion)

//Rest pattern and parameter
// spread(...) operator is present in the RHS of =
let numss = [2, 3, 4, 5, 6]
let newNums = [1, ...numss]
console.log(newNums)

//syntax of rest(...) get elements and pack them into array
// use in LHS

let [a, b, ...arrNums] = numss;
console.log(arrNums)

//objects

let {sunday, ...weekdays} = hotel.openingHours
console.log(weekdays, weekdays.tuesday)

//short Circuiting (&& , ||(also known as default assignment))
// false values => 0, false, undefined, null, ""(empty string) 

let result1 = null && "Gaming" // not move towards next operand if preceding operand is false
let result2 = "gaming" && 0 && "Programming"
console.log(result1, result2)

let result3 = null || "Gaming"
let result4 = "Gaming" || 0 || "Programming" // not move towards next operand if preceding operand is true
console.log(result3, result4)

//Nullish coalescing operator(??) (behaves like "||" operator)
//only "null" and "undefined" are false values
let result5 = 0 ?? 10;
let result6 = null ?? 10;
console.log(result5, result6)