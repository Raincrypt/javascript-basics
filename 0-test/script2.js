console.log("Q1");
// Return Duplicate Values

let arr = [1, 2, 3, 4, 5, 5, 0, 4, 99, 99, 2];

const findDuplicate = (arr) => {
    // let uniqueVal = [];
    // let dupVal = [];

    // arr.forEach(element => {
    //     if(!uniqueVal.includes(element)){
    //         uniqueVal.push(element);
    //     }
    //     else{
    //         dupVal.push(element);
    //     }
    // });
    // return dupVal;

    const duplicate = arr.filter((element, index, arr)=>{
        return arr.indexOf(element)!==index;
    });
    return duplicate;
}

console.log("Duplicate Values are: ", ...findDuplicate(arr));


console.log("Q2");
// Return total marks of Students with marks greater than 60 
// after 20 marks have been added to those who scored less than 60.

const Students = [
    {name: "Mousom", rollNum: 20, marks: 89},
    {name: "Shourya", rollNum: 21, marks: 85},
    {name: "Nishant", rollNum: 22, marks: 69},
    {name: "Dhruv", rollNum: 23, marks: 35},
    {name: "Sarthak", rollNum: 24, marks: 55},
];

const student = Students.map((student) => {
    if(student.marks < 60){
        student.marks += 20;
    }
    return student;
}).filter((student)=>{
    return student.marks > 60;
}).reduce((acc, curr)=>{
    return acc + curr.marks;   
}, 0)

console.log(student);


console.log("Q3");
// How would you use a closure to create a private counter?

let counter = () => {
    let _counter = 0;
    let add = (increment) => _counter += increment;
    let retrieve = () => `Counter = ${_counter}`;
    return { add, retrieve};
}

const cc = counter();
cc.add(6);
cc.add(10);
console.log(cc.retrieve());

console.log("Q4");
// What is a Module Pattern?

let Module = (function(){

    function privateMethod(){
        //Do Something
        msg = "Private Method Called";
    }

    return{
        publicMethod: function(){
            //can call "privateMethod()"
            console.log("Public");
        }
    }

})();

Module.publicMethod();

console.log("Q5");
// Make this run only once
// let videoTitle;
// function likeTheVideo() {
//     videoTitle = "Video Title";
//     console.log(`like the Video "${videoTitle}"`);
// }
// likeTheVideo();
// likeTheVideo();
// likeTheVideo();


let videoTitle;
let likeTheVideo = () => {

    let count = 0;

    return function () {
        if(count > 0){
            console.log("Already liked the Video");
        }
        else{
            videoTitle = "is Kafka Worth Building";
            console.log(`like the Video "${videoTitle}"`);
            count++;
        }
    }
}

let isLiked = likeTheVideo();

isLiked();
isLiked();
isLiked();

console.log("Q6")
//infinite Currying
//console.log(add(5)(4)(7)(2)(1)());

let add = (a) =>{
    return function (b){
        if(b) return add(a + b);
        return a;
    }
}

console.log(add(5)(4)(7)(2)(1)());

console.log("Q7")
//implementation Currying
//converts f(a, b, c) to f(a)(b)(c)

function curry(func){
    return function curriedFunction(...args){
        if(func.length <= args.length){
            return func(...args);
        }
        else{
            return function(...next){
                return curriedFunction(...args, ...next);
            }
        }
    }
}

nums = [1, 2, 3, 4];

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(4));

console.log("Q8")
//create an object calculator

let calculator = {
    // ... your code ...
    
    read(){
        // this.num1 = +prompt("a = ", 0),
        // this.num2 = +prompt("b = ", 0)
        this.num1 = 3,
        this.num2 = 5
        
    },
    sum(){
        return this.num1 + this.num2;
    },
    mul(){
        return this.num1 * this.num2;
    },

    // .................
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

console.log("Q9")
//implement calc

const calc = {
    total: 0,
    add(n){
        this.total += n;
        return this;
    },
    multiply(n){
        this.total *= n;
        return this;
    },
    subtract(n){
        this.total -= n;
        return this;
    },
}

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);

console.log("Q10 (I)")
//make the code work

let myName = "Wrong Name";

function checkPassword1(success, failure){
    let password = "abcd";
    if(password === "abcd") success();
    else failure();
}

let user1 = {
    myName: "Mousom",
    loginSuccessful(){
        console.log(`${this.myName} logged in`);
    },
    loginFailed(){
        console.log(`${this.myName} failed to log in`);
    }
};

checkPassword1(user1.loginSuccessful, user1.loginFailed); //Wrong name logged in

checkPassword1(user1.loginSuccessful.bind(user1), user1.loginFailed.bind(user1)); //Mousom logged in

console.log("Q10 (II)")
//make the code work

function checkPassword2(ok, fail){
    let password = "abcd";
    if(password == "abcd") ok();
    else fail();
}

let user2 = {
    myName: "Mousom",

    login(result){
        let output = this.name + (result ? "Login Successful" : "Login Failed")
        console.log(output);
    },
}

//checkPassword2(?, ?);

console.log("Q11")
// create a first promise which will resolve to a text "first" then create a second promise that resolves our first promise
// need to print output of 1st promise using second promise

const firstPromise = new Promise((resolve, reject) => {
    resolve("First!");
})

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
})

secondPromise.then(res => res).then(res => console.log(res));

console.log("Q12")
//convert the following code from '.then/catch' to 'async/await'

// function loadJson(url) {

//     return fetch(url).then((responce) => {
//         if(responce.status == 200){
//             return responce.json();
//         }
//         else{
//             throw new Error(responce.status);
//         }
//     })
// }

// loadJson("some Url").catch(err => console.log(err));

async function loadJson(url){

    let responce = await fetch(url);

    if(responce.status == 200){
        let json =  responce.json();
        return json;
    }
    throw new Error(responce.status);
}

loadJson("some Url").catch(err => console.log(err));

console.log("Q13")
// Implement promise recursively

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

function promRecurse(funcPromises){
    //write implementation
    if(funcPromises.length === 0) return;

    const currPromise = funcPromises.shift();
    currPromise.then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
    promRecurse(funcPromises);
}

promRecurse([
    func1('data 1'),
    func2('data 2'),
    func3('data 3'),
])

console.log("Q14")
// 