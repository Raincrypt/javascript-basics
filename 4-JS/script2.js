//Promise
//Promise is a way to avoid callback hell

let unfullfilledPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Error in Retrieving Data (a Unfullfilled Promise)`);
        }, 1000);
    })
}

let todos = (resourse) =>{

    return new Promise((resolve, reject) => {

        let request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
            if(request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText)
                resolve(data)
            }
            else if(request.readyState === 4){
                let responseCode = JSON.parse(request.status)
                reject(`${responseCode} Error`)
            }
        })

        request.open("Get", resourse)

        request.send()
    })
}

todos("data.json").then((data) => {
    console.log("Promise 1 Resolved",data)

    return todos("data2.json")

}).then((data) => {
    console.log("Promise 2 Resolved",data)

    return unfullfilledPromise();

}).then((data) => {
    console.log("Promise 3 Resolved",data) //this won't be fullfilled as previous promise was rejected

    return todos("data3.json")
}).catch((error) => { //Only one error can be catched
    console.log(error)
})

Promise.all([ //if one of the promise fails then all the promises will fail
    todos("data.json"),
    todos("data2.json"),
    unfullfilledPromise(),
    todos("data3.json"),
]).then((res) => {
    console.log("Promises Resolved (Promise.all)",res)
}).catch((err) => {
    console.log(`Error: Promises Failed(Promise.all): ${err}`);
})

Promise.race([ //returns the first object that gets rejected or fullfilled
    todos("data.json"),
    todos("data2.json"),
    todos("data3.json"),
]).then((res) => {
    console.log("Promises Resolved (Promise.race)",res)
}).catch((err) => {
    console.log(`Error: Promises Failed (Promise.race): ${err}`);
})

Promise.any([ //returns the first object that gets fullfilled and ignores all the rejected promise
            //only catches error when all the promises were rejected
    todos("data.json"),
    todos("data2.json"),
    todos("data3.json"),
]).then((res) => {
    console.log("Promises Resolved (Promise.any)",res)
}).catch((err) => {
    console.log(`Error: Promises Failed (Promise.any): ${err}`);
})

Promise.allSettled([ //Even if one of the promise fails, the promises that were fullfilled will also be shown
    todos("data.json"),
    todos("data2.json"),
    todos("data3.json"),
    unfullfilledPromise(),
]).then((res) => {
    console.log("Promises Resolved (Promise.allsettled)",res)
}).catch((err) => {
    console.log(`Error: Promises Failed (Promise.allsettled): ${err}`);
})