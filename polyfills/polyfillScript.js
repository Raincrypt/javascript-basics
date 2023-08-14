//============= Polyfill for once Function ===========================================



//====================================================================================


//============= Polyfill for memoize/cashing Function ================================

function myMemoise(fn, context){
    let res = {};
    return function(...args){
        var argsCashe = JSON.stringify(args);
        if(!res[argsCashe]) res[argsCashe] = fn.call(context || this , ...args);
        
        return res[argsCashe];
    }
}

//eg:
const clumsyProduct = (n1, n2) => {
    for(let i = 1; i < 1000000000; i++){}

    return n1*n2;
}

console.log("Without memoize Function:");
console.time("First call");
console.log(clumsyProduct(3, 4));
console.time("First call");

console.time("First call");
console.log(clumsyProduct(3, 4));
console.time("First call");


console.log("With memoize Function:");
let cashedClumsyProduct = myMemoise(clumsyProduct);

console.time("First call");
console.log(cashedClumsyProduct(3, 4));
console.time("First call");

console.time("First call");
console.log(cashedClumsyProduct(3, 4));
console.time("First call");


//===================================================================================

// ===== Call Function ("function.call(object, arguments)") =========================

let car1 = { color: "red", company: "Ferrari"}

function purchaseCar(currency, price){
    console.log(`Purchased ${this.color} ${this.company} priced at ${currency}${price}`);
}

Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "It's not callable");
    }

    context.fn = this;
    context.fn(...args);
}

purchaseCar.myCall(car1, "$", 500000000);

//===================================================================================

// ===== Apply Function ("function.apply(object, [arguments])") =========================

let car2 = { color: "red", company: "Ferrari"}

function purchaseCar(currency, price){
    console.log(`Purchased ${this.color} ${this.company} priced at ${currency}${price}`);
}

Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this !== 'function'){
        throw new Error(this + "It's not callable");
    }
    if(Array.isArray(args)){
        throw new Error(this + "CreateListFromArrayLike called on non-object");
    }

    context.fn = this;
    context.fn(...args);
}

purchaseCar.myApply(car2, ["$", 500000000]);

//===================================================================================

// ===== Bind Function ("function.bind(object, arguments)") =========================

let car3 = { color: "red", company: "Ferrari"}

function purchaseCar(currency, price){
    console.log(`Purchased ${this.color} ${this.company} priced at ${currency}${price}`);
}

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "Cannot be Bound as it is not callable");
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs);
    }
}

let newPurchaseCar1 = purchaseCar.myBind(car3);
newPurchaseCar1("$", 500000000);

let newPurchaseCar2 = purchaseCar.myBind(car3, "$", 500000000);
newPurchaseCar2();

//===================================================================================

// ================================ Promise Polyfill ================================

function myPromise(executor){
    let onResolve;
    let onReject;
    let isFullfilled = false,
        isRejected = false,
        isCalled = false,
        value

    function resolve(val) {
        isFullfilled = true;
        value = val;

        if(typeof onResolve === 'function'){
            onResolve(value);
            isCalled = true;
        }
    }
    function reject(val) {
        isRejected = true;
        value = val;

        if(typeof onReject === 'function'){
            onReject(value);
            isCalled = true;
        }
    }
    
    this.then = function (callback){
        onResolve = callback;

        if(isFullfilled && !isCalled){
            isCalled = true;
            onResolve(value);
        }

        return this;
    }
    this.catch = function(callback){
        onReject = callback;

        if(isRejected && !isCalled){
            isCalled = true;
            onResolve(value);
        }

        return this;
    }
    
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

const examplePromise = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
})

examplePromise.then((res) => {
    console.log(res);
})

//===================================================================================

// ================================ Promise.all() Polyfill ================================

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

Promise.myAll([
    func1('data 1'),
    func2('data 2'),
    func3('data 3'),
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

//===================================================================================