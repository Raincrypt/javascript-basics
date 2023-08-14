//Immediately invoked function Expression [IIFE]
//used only at the top of all other functions
(function(name){
    console.log(`This function will never execute again ${name}`)
})("IIFE")

console.log("Basic-2 Javascript")

function nameOfFunction(){
    console.log("nameOfFunction called")
}
nameOfFunction()

//Better Way to define function
let fun = function(functionName = `default name`, value = `Default Value`){
    console.log(`${functionName} called whose value is ${value}`)
    return value;
    //console.log(`after return statement in a function no other statement is executed.`)
}
fun(`fun`)
let res = fun("fun", 33)
console.log(res)

//Arrow Function(ES6)
//Best way to write function

let basicInvitation = name2 => `Welcome ${name2}` //for single line and single variable 
console.log(basicInvitation("Mousom"))

let invitation = (name, event) => {
    return `Welcome ${name} to ${event}`
}
console.log(invitation("Mousom", "E-SUMMIT 2023"))

//passing function as an argument
let upperCase = function(str){
    return str.toUpperCase()
}
let lowerCase = str => str.toLowerCase();

let transformer = (str, func) => {
    let reply = func(str)
    return reply
}
console.log(transformer("hello programmers",upperCase))

//function returning another function

let compliment = msg =>{
    return name =>{
        console.log(`${msg} ${name}`)
        return "Worked!!!!!"
    }
}
//Not used generally
console.log(compliment("You are a good coder")("Lurie"))

//used method
let complimented = compliment("You are a good coder")
complimented("Mousom")

// functions: good-for multi-line code
//             creates a new "this" context
// arrow functions: good for single line code
//                 doesn't create a "this" context
//Higher-order contains other function to do some task

//setTimeout and setInterval are asyncronous function... it will not run immidiately
//setTimeout(func|code, delay, arg1. arg2,...)

function greeting(arg1 = "Default Value"){
    console.log("setTimeout", arg1);
}
setTimeout(greeting, 5000, "Mousom") //5000ms = 5sec

//setInterval(func|code, delay, arg1. arg2,...)
//setInterval(greeting, 1000)

//Hoisting
//Variable "Declaration" are hoisted toward "top" of their scope
// This doesn't happen with let and const
a = 10
console.log(a)
var a;
// Functions are Hoisted in Javascript
fun()
function fun(){
    console.log("aaa")
}

//Currying
let sum = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let evaluate = (operation) => {
    return function(num1){
        return function(num2){
            let result = sum(num1, num2);
            console.log(`Numbers: ${num1} and ${num2} (${operation})`);
            if(operation === "sum") result = sum(num1,num2);
            else if(operation === "subtract") result = subtract(num1,num2);
            else if(operation === "divide") result = divide(num1,num2);
            else if(operation === "multiply") result = multiply(num1,num2);
            else result = "Invalid Operation";
            console.log(`Result: ${result}`)
        }
    }
}

evaluate("sum")(8)(4);
evaluate("multiply")(8)(4);
evaluate("divide")(8)(4);
evaluate("subtract")(8)(4);
evaluate("invalid")(2)(2);

const mul = evaluate("multiply");
mul(2)(3);
mul(7)(11);

//currying vs partial application

//currying
function sum2(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
console.log(sum(10)(5)(2))

//partial application
function sum1(a){
    return function(b, c){
        return a + b + c;
    }
}
console.log(sum(10)(5, 2))