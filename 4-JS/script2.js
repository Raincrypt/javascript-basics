//Promise
//Promise is a way to avoid callback hell

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

    return todos("data3.json")

}).then((data) => {
    console.log("Promise 3 Resolved",data)


}).catch((error) => { //Only one error can be catched
    console.log(error)
})