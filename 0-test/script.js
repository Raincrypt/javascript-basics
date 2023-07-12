// Q1. Lets say John is looking a new country to live in. He want to live in a country that speaks English, has less than 10 million people. 
//     One of the food option between these two must present Spanish food OR English food.
//     Write an if/else if statement to help john figure out Your country is right for him?
"use-strict"
console.log("Q1")
let countries = [
    {
        country: "India",
        language: "English",
        population: 2,
        food: ["Chinese", "English"]
    },
    {
        country: "Spain",
        language: "Spanish",
        population: 2,
        food: ["Spanish", "English"]
    },
    {
        country: "Pakistan",
        language: "Urdu",
        population: 2,
        food: ["Chinese", "English"]
    },
    {
        country: "Bangladesh",
        language: "Bengali",
        population: 2,
        food: ["Chinese", "English"]
    }
]

countries.forEach(element => {
    if(element.language !== "English"){
        console.log(`${element.country} is not the desired country`)
    }
    else{
        if(element.food.includes("Spanish") || element.food.includes("English")){
            console.log(`${element.country} is a good choice`)
        }
        else{
            console.log(`${element.country} is not the desired country`)
        }
    }})

//Q2. create function which will display Your name after every 5 seconds
// let fun = (name) =>{
//     console.log(`${name} printed after 5 sec`)
// }
// let Name = "Mousom"
// setInterval(fun, 5000, Name)

//Q3. Create a JavaScript Function to capitalize the first letter of each word of a given string.
console.log("Q3")
let sentence = "today is a rainy day!!!!"
let uppercaseFirstLetter = (word) =>{
    let firstLetter = ""
    firstLetter = word[0].toUpperCase()
    word = firstLetter + word.substr(1)
    return word
}
let capitalize = (str) =>{
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = uppercaseFirstLetter(str[i]);
    }
    return str.join(" ");
}
console.log(capitalize(sentence))

//Q4. if there is any error, How we can solve that error? 
//   let airplane = {
//   flightName: 'fly india',

//   atacode: 'FI',

//   ratings: 4.9,

//   book(passenger, flightNum) {
//     console.log(
//       `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
//     );
//   },
// };
//  let bookMethod = airplane.book;
//  bookMethod('john', 8754);

console.log("Q4")
let airplane = {
    flightName: 'fly india',
  
    atacode: 'FI',
  
    ratings: 4.9,
  
    book: function(passenger, flightNum) {
      console.log(
        `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
      );
    }
  };
airplane.book('john', 8754);

//Q5. You have to create a Shopping_Cart array with following features :

    // addItem(itemName) : this function should add string itemName to cart

    // removeItem(itemName): this function should remove any item which matches itemName. Hint : search for index of itemName and then remove it

    // cartSize() : returns size of cart in terms of number of cart Items.

console.log("Q5")
let shopping_cart = []
let addItem = (item) => {
    shopping_cart.push(item)
    console.log(`${item} added`)
}
let removeItem = (item, cart) => {
    if(!cart.includes(item)){
        console.log(`${item} does not exist in cart`)
    }
    else{
        //Array.splice( index, remove_count, item_list )
        // This method accepts many parameters some of which are described below: 

        // index: It is a required parameter. This parameter is the index from which the modification of the array starts (with the origin at 0). 
        //        This can be negative also, which begins after many elements counting from the end.
        // remove_count: The number of elements to be removed from the starting index.
        // items_list: The list of new items separated by a comma operator that is to be inserted from the starting index.
        shopping_cart.splice(cart.indexOf(item), 1)
        console.log(`${item} removed`)
    }
}
let cartSize = (cart) => {
    return cart.length
}
addItem("Rice", shopping_cart)
addItem("Oats", shopping_cart)
addItem("Wine", shopping_cart)
removeItem("Rice", shopping_cart)
removeItem("Paneer", shopping_cart)
console.log(shopping_cart)
console.log(cartSize(shopping_cart))

// Q6.
console.log("Q6")
