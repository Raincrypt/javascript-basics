//Importing and exporting

//import { order, laptopPrise as lp, q } from './products.js' //to import specific things
import * as singleVariable from "./products.js"
import anyName from "./products2.js"// as it was exported as default so not need to de-structure

console.log("Importing Module")

singleVariable.order("Mousom", "Macbook Pro")
console.log(`Price of the Laptop is ${singleVariable.laptopPrise} and I bought ${singleVariable.q} of them.`)

anyName("Aarushi", "ROG Zephyrus 14")
//------------------------------------------------------------------------
// Top Level Await ES2022

//Before ES2022 we could only use await only inside async function
//But ES2022 introduced top level await
//i.e we can now use "await" outside the async function

let response = await fetch("../4-JS/data.json")
let data = await response.json();
console.log(data)
console.log("Finish.....")

//top level await blocks the execution of next code part
//it can be a problem... usually async await is preferable