console.log("Que-Ans");

Promise.myAll = (promise) => {
    return new Promise((resolve, reject) => {
        //Write Here
    });
}

function func1(data){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`func 1 ${data}`)
        }, 1000)
    });
}

function func2(data){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`func 2 ${data}`)
        }, 1000)
    });
}

function func3(data){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`func 3 ${data}`)
        }, 1000)
    });
}

function f(num) {
    return num;
}

Promise.myAll([
    func1('data 1'),
    func2('data 2'),
    func3('data 3'),
    f(2),
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})