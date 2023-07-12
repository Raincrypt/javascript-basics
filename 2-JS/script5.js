// date and time
//Date method
let currentDate = new Date()
console.log(currentDate)
let someDate = new Date(21, 0, 24) //yy, mm, dd, hr, min, sec
//month sarts from 0
console.log(someDate)
let date = new Date(0)// time in millisecond if one argument
//Date(0) shows the day computer was 1st created 1-1-1970
console.log(date)

let currentDateMs = new Date().getTime()
console.log(currentDateMs)// how many ms time passed since the computer first created

