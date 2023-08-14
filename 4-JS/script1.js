//Asyncronous Javascript

//HTTP response status codes:
    // Informational response (100- 199)
    // Successfull response (200-299)
    // Redirectional messages (300 - 399)
    // client error response (400-499)
    // server error response (500 - 599)

// Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. 
// Every callback depends/waits for the previous callback, 
// thereby making a pyramid structure that affects the readability and maintainability of the code.


let todos = (callback) =>{
    //Making HTTP Request
    let request = new XMLHttpRequest(); //XMLHttpRequest (XHR) objects are used to interact with servers.

    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request, request.readyState)
            //pasring JSON means coverts it into regular js objects
            let data = JSON.parse(request.responseText)
            
            callback(undefined, data)
        }
        else if(request.readyState === 4){
            console.log(`${request.status}`)
            callback("error",undefined)
        }
    })

    //set up the request
    request.open("Get", "data.json")

    //Sending the Request
    request.send()
}

todos((error, data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})

//In JavaScript Syncronous code always runs before Asyncronous code

console.log("start");

function importantAction(username, callBack){
    setTimeout(()=>{
        callBack(`${username} logged in`);
    }, 1000)
}

const message = importantAction("Mousom", (message) => {
    console.log(message);
})

console.log("stop");