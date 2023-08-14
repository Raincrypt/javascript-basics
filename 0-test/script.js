"use-strict"
// Q1. Lets say John is looking a new country to live in. He want to live in a country that speaks English, has less than 10 million people. 
//     One of the food option between these two must present Spanish food OR English food.
//     Write an if/else if statement to help john figure out Your country is right for him?

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

console.log("Q6")
//output of the following code?

const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;

console.log(a[b])
//ans: 456
//reason : b,c are read as:
//         b = c = "[object object]" ,as object cannot be converted into a key unless it's a string.

console.log("Q7")
//output of the following code?

const shape = {
    radius: 10,
    diameter(){
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NaN (as "this" points to the window object)

console.log("Q8")
//output of the following code?

let msg = {greeting: "Hey!!!"};
let altMsg;
altMsg = msg; // providing the reference of object
msg.greeting = "Hello";
console.log(altMsg.greeting); //Hello

console.log({a: 1} == {a: 1}); //false
console.log({a: 1} === {a: 1}); //false (as both have different space in memory)
console.log(msg == altMsg); //true

console.log("Q9")
//output of the following code?

const value = { number: 10};

const multiply = (x = {...value}) => {
    console.log((x.number *= 2));
}

multiply(); //20
multiply(); //20
multiply(value); //20 (Here the value gets updated to 20)
multiply(value); //40

console.log("Q10")
//output of the following code?

function makeUser1(){
    return {
        name: "john",
        ref: this,
    };
}

let user1 = makeUser1();
console.log(user1.ref.name); //<empty string>

function makeUser2(){
    return {
        name: "john",
        ref:() => {
            return this;
        }
    };
}

let user2 = makeUser2();
console.log(user2.ref().name); //<empty string> (as "this" in arrow function refers to the parent function that in this case is window)

function makeUser3(){
    return {
        name: "john",
        ref() {
            return this;
        }
    };
}

let user3 = makeUser3();
console.log(user3.ref().name); //john

console.log("Q11")
//output of the following code?

var length = 4;

function callback(){
    console.log(this.length);
}

const object = {
    length: 5,
    method(fn){
        fn();
    }
};

object.method(callback); //4

// console.log("Q12")
// //output of the following code?

// const user11 = {
//     name: "Mousom",
//     logMessage(){
//         console.log(this.name);
//     }
// };

// setTimeout(user11.logMessage, 1000); //<empty string>

// const user22 = {
//     name: "Mousom",
//     logMessage(){
//         console.log(this.name);
//     }
// };

// setTimeout(() => {
//     return user22.logMessage();
// }, 2000); //Mousom

console.log("Q13")
//output of the following code?

const person = { name: "Mousom"};

function sayHi(age = 22){
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 23)); //Mousom is 23
console.log(sayHi.apply(person, [24])); //Mousom is 24
console.log(sayHi.bind(person, 25)); //BoundFunctionObject
console.log(sayHi.bind(person)(25)); //Mousom is 25

console.log("Q14")
//output of the following code?

// var status = "😎";

// setTimeout(() => {
//     const status = "😍";

//     const data = {
//         status: "💕",
//         getStatus(){
//             return this.status;
//         },
//         getStatusArrow: () => {
//             return this.status;
//         }
//     }

//     console.log(data.getStatus()); //💕
//     console.log(data.getStatus.call(this)); //😎 (As "this" points to the scope where the function is bound hence, in this scenario window)

//     console.log(data.getStatusArrow()); //😎
//     console.log(data.getStatusArrow.call(this)); //😎
// }, 0);

console.log("Q15")
//output of the following code?

console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1); //syncronous operation
//     resolve(2); //asyncronous operation
//     console.log(3); //syncronous operation
// })

// console.log("middle")

// promise1.then((res) => {
//     console.log(res);
// })

console.log("end");
// start
// 1
// 3
// middle
// end
// 2 (as asyncronus code always executes after syncronous code)

console.log("Q16")
//output of the following code?

// function job(state) {
//     return new Promise(function (resolve, reject){
//         if(state){
//             resolve("success");
//         }
//         else{
//             reject("error");
//         }
//     })
// }

// let promise = job(true);

// promise.then(function (data){

//     console.log(data);
//     return job(false)

// }).catch(function (err){

//     console.log(err);
//     return "error caught";

// }).then(function(data){

//     console.log("Custom Error: ",data);
//     return job(true)

// }).catch(function (err){

//     console.log(err);

// })

// success
// error
// Custom Error:  error caught

console.log("Q17")
//output of the following code?

// function job(state){
//     return new Promise(function (resolve, reject){
//         if(state){
//             resolve("success");
//         }
//         else{
//             reject("error");
//         }
//     })
// }

// let promise = job(true);

// promise.then((data) => {
//     console.log(data);
//     return job(true)
// }).then((data)=>{
//     if(data != "victory"){
//         throw "defeat";
//     }
//     return job(true);
// }).then((data) => {
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
//     return job(false);
// }).then((data) => {
//     console.log(data);
//     return job(true)
// }).catch((err)=>{
//     console.log(err);
//     return "error caught";
// }).then((data) => {
//     console.log(data);
//     return new Error("test"); //not returning a promise
// }).then(function (data){
//     console.log("success:", data.message)
// }).catch(function (data){
//     console.log("Error:", data.message)
// });

// success
// defeat
// error
// error caught
// success: test