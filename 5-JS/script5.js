// Module Pattern
//generally used as the variables/data is protected and no one can change it


//IIFE
let resultIIFE = (function(){
    let orders = [];
    let addToCart = (product, quantity) => {
        console.log(`${quantity} ${product} ordered`)
        orders.push({product, quantity})
    }
    return {
        orders,
        addToCart
    }
})()

console.log(resultIIFE.addToCart("Burger", 5))
console.log(resultIIFE.addToCart("Butter Chicken", 2))
console.log(...resultIIFE.orders)