//Event Basics (click Event)
const ul = document.querySelector("ul")

let buttonOfList = document.querySelector('.click-me')
buttonOfList.addEventListener('click', ()=>{
    let li = document.createElement('li')
    li.textContent = "Something New"
    ul.append(li)//append add element in last
    //prepend add element in first
})

// let elements = document.querySelectorAll("li")
// elements.forEach(element => {

//     element.addEventListener('click', (e)=>{
//         //console.log(e.target) //target tells the the details of the whole element
//         let task =  e.target
//         if(task.style.textDecoration === 'line-through'){
//             task.remove()
//         }
//         else{
//             task.style.textDecoration = "line-through"
//         }
//     })

// });

//Bubbling: The event starts are the element that triggered it. Then, it bubbles up to each of it’s parent elements until it reaches the html element.
//Delegation: Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

//better method than above as it applies to all child element also known as event delegation
ul.addEventListener('click', (e) =>{
    let task =  e.target
        if(task.style.textDecoration === 'line-through'){
            task.remove()
        }
        else{
            task.style.textDecoration = "line-through"
        }
})

//more events
//copy event i.e event where one copies a text/paragraph

let header = document.querySelector('.header')
header.addEventListener('copy', ()=> {
    console.log(`copyright issued hence can't be copied`)
})

//mouse move event
let box = document.querySelector('.box')
box.addEventListener('mousemove', () => {
    console.log("Hovered")
})