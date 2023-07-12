console.log("Basic Javascript");

let firstName = "Mousom";
let lastName = "Sarkar";

// Best way to write strings
let fullName = `My name is ${firstName} ${lastName}`;
console.log(fullName);

let fullName2 = "MousomSarkar";
let Hobbies = "       Coding Gaming Eating        "
//trim method
let hobbies = Hobbies.trim()
console.log(Hobbies);
console.log(hobbies);

console.log(hobbies.indexOf("Gaming")); // to find position of char or string //7
console.log(hobbies.includes("Reading")); //to only know where the string exists or not
console.log(fullName2.slice(0,6)) //excludes the last one i.e includes only 0-5 indexed char

let arrHobbies = hobbies.split(" ");
console.log(arrHobbies);
// Javascript strings are immutable
// Priority and precedence
//1. () brackets
//2. ** power
//3. * / % (from left to right)
//4. + - (from left to right)
let score = 50;
console.log(score * 2 + (4 + 4) - 8 / 2 % 4) // 108

//loose eqality(==) vs scrict eqality(===)
let age = 22; //number
console.log(age == "22") //focus only on value... genarally not advisable
console.log(age === "22") //focuses on both value and type

//type conversion
let stringType = "54"
console.log(stringType, typeof stringType);
let numberType = Number(stringType);
console.log(numberType, typeof numberType);
let stringType2 = String(numberType);
console.log(stringType2, typeof stringType2);

let age2 = 22;
let booleanOfAge2 = Boolean(age2);
console.log(booleanOfAge2); // false only for 0 or blank string

let arrDishes = ["Biryani", "Cake", "Paratha"]
console.log(arrDishes.join("-")) //Biryani-Cake-Paratha
console.log(arrDishes.indexOf("Cake")); //1
let newArrOfDishes = ["Roti", "Makhan", "Chat-Papri"]
console.log(arrDishes.concat(newArrOfDishes)); // doesnt modify the original array hence non mutating
console.log(arrDishes, newArrOfDishes)
console.log(newArrOfDishes.length) //3
console.log(newArrOfDishes.push("Vada-Pao"));
console.log(newArrOfDishes, newArrOfDishes.length);
console.log(newArrOfDishes.pop()) //removes the last element from original array
console.log(newArrOfDishes, newArrOfDishes.length);

for(let i = 0; i < arrDishes.length; i++){
    console.log(`${i} = ${arrDishes[i]}`); // `` is called template literal
}// better use for loop instead of while loop
// do while is not generally used

let password = "qwerty22"
let errorMsg = "Change Your Password"
let okMsg = "Good Password"
let correctMsg = "Strong Password"
// Priority of operators is not => && , || from left to right
if(password.length >=6 && password.includes("@")){
    console.log(correctMsg)
}
else{
    console.log(errorMsg);
}
let statusVar = false;
if(!statusVar){
    console.log(`statusVar is ${!statusVar}`);
}
else{
    console.log(`statusVar is ${statusVar}`);
}

//ternary operator
let age3 = 55;
let result = password.length >=6 ? password.includes("@") ? correctMsg : okMsg: errorMsg;
console.log(result);