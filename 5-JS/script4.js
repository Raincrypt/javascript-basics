//Importing and exporting

//import { order, laptopPrise as lp, q } from './products.js' //to import specific things
import * as singleVariable from "./products.js"
import anyName from "./products2.js"// as it was exported as default so not need to de-structure

console.log("Importing Module")

singleVariable.order("Mousom", "Macbook Pro")
console.log(`Price of the Laptop is ${singleVariable.laptopPrise} and I bought ${singleVariable.q} of them.`)

anyName("Aarushi", "ROG Zephyrus 14")