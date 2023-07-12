// Working with arrays

let letters = ["a", "b", "c", "d", "e"]

//reverse (Mutating the original array)
let reverse = letters.reverse();
console.log(reverse, letters)

//join non mutating
let nums = [1, 2, 3, 4]
console.log(nums.join("-"), typeof nums.join("-"))

//slice non mutating
let extractedArray = nums.slice(1, 4) // slice(index of stating element, index of last element)
console.log(extractedArray)

//splice Mutating method
let numbers = [1,2,3,4,5,6,7,8]
let updated = numbers.splice(numbers.indexOf(4), 2, 9, 10, 11)
console.log(`Original Array: ${numbers}`)
console.log(`Numbers removed: ${updated}`)

//at can be used with array and strings
console.log(numbers[numbers.length - 4]) //array[-1] shows error
console.log(numbers.at(-4))

// Create new array from original array by applying transformation function

//Map Method
let salaries = [1000, 2000, 3000, 4000, 5000]
let newSalaries = salaries.map(salary =>{
    let incrementedAmount = salary / 2
    return salary + incrementedAmount
})
console.log(`New Incremented salaries: ${newSalaries}`)

//filter Method
let salaries2 = [1000, 2000, 3000, 4000, 5000]
let newSalaries2 = salaries2.filter(salary =>{
    if(salary > 3000){
        return salary
    }
    
})
console.log(salaries2)
console.log(newSalaries2)

//reduce Method (Non mutable)
//Run reducer function for each array element
//returns single value
//array.reduce(function(total, currentValue), initialValue)
let num = [1, 2, 3, 4, 5]

let sum = num.reduce((total, currentValue) =>{
    return total + currentValue
}, 0)
console.log(sum)

//find Method (generally used in complex arrays)
// it returns the first element that matches the condition or returns undefined if the item is not there
let students = [
    {
        id: 1,
        name: "Mousom"
    },
    {
        id: 2,
        name: "Akshit"
    },
    {
        id: 3,
        name: "Gautam"
    }
]

let child = students.find(student =>{
    return student.id === 2
})
console.log(child)

//findIndex Method
//it returns index of the element or -1 if it doesn't exist
//better than indexOf as we can add condition
let marks = [22,33,44,5,66,77,23]
let result = marks.findIndex(mark =>{
    return mark >= 50
})
console.log(`index of first passing marks: ${result}`)

//some and every
//some method return "true" if any array element pass the test
//every method return "true" if all array element pass the test

let passed = marks.every(mark =>{
    return mark >=50
})

let partialPass = marks.some(mark =>{
    return mark >=50
})
console.log(passed)
console.log(partialPass)

//flat Method
//it creates a new array with the elements of the subarrays concatenated into it
let arr = [1,2,[55,66,77,[888,999,1110],88],[99,110],5,6,7]
console.log(arr)
console.log(arr.flat()) //devault value 1
console.log(arr.flat(2))

//flatMap Method
// similar to "flat()" but used for complex arrays
let studentsFemale = [
    {
        id: 1,
        name: "Aarushi"
    },
    {
        id: 2,
        name: "Bhavika"
    },
    {
        id: 3,
        name: "Himanshi"
    }
]

let newStudentFemale = studentsFemale.flatMap(student =>{
    if(student.name === "Himanshi"){
        return [student,{
            id: 4,
            name: "Khushi"
        }]
    }
    else{
        return [student]
    }
})
console.log(newStudentFemale)

//sorting of arrays
let letters2 = ["d", "e", "a", "g", "t", "z"]
console.log(letters2.sort()) //ascending
console.log(letters2.sort().reverse()) //descending

let nums2 = [2, 4, 1, 6, -2, -44, -22, -55]
console.log("Incorrect sorting: ",nums2.sort()) //wrong result
nums2.sort((a, b) =>{
    if(a>b) return 1 // means swap the position
    if(a<b) return -1 //means make no change to order
})
console.log("sorted Array: ", nums2)