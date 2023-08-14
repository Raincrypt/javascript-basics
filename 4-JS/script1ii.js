console.log("Start");

const sub = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const result = true;
        if(result) resolve("Worked");
        else reject(new Error("Custom Error"));
    }, 2000)
})

sub.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

console.log("Stop");