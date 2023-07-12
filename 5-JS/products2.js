console.log("Exporting Module")

export let order = (name, product) =>{
    return console.log(`${name} ordered a ${product}`)
}

let laptopPrise = 90000
let quantity = 25

export default order // it can export only one thing