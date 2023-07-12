// Fetch Api [Important]

// fetch("data.json").then((response) => {
//     console.log("Promise 1 Resolved",response)
//     return response.json()// returning promise
// }).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })

//async and await
//Non blocking
let getTodos = async() => {
    try{
        let response = await fetch("data.json")
        let data = await response.json()

        let response2 = await fetch("data2.json")
        let data2 = await response2.json()

        //custom error
        // if(response.status !== 200){
        //     throw new Error("Custom error in Fetching the Data")
        // }

        console.log(data, data2)
    }
    catch(error){
        console.log(error)
    }
}

// getTodos().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error.message)
// })

getTodos()