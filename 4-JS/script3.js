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

let unfullfilledPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Error in Retrieving Data (a Unfullfilled Promise)`);
        }, 1000);
    })
}

let getTodos = async() => {
    try{
        let response = await fetch("data.json")
        let data = await response.json()
        console.log(data);
        data.forEach((friend) => {
            console.log(`${friend.name} is ${friend.age}yrs old`);
        })
        

        let response2 = await fetch("data2.json")
        let data2 = await response2.json()
        console.log(data2);
        data2.forEach((friend) => {
            console.log(`${friend.name} is ${friend.age}yrs old`);
        })

        let data3 = await unfullfilledPromise();
        console.log(data3);
        // // custom error
        // if(response.status !== 200){
        //     throw new Error("Custom error in Fetching the Data")
        // }

        
    }
    catch(error){
        console.log("Promises Failed: ", error)
    }
}

// getTodos().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log("error.message", error)
// })

getTodos()