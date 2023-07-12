//DOM (Document Object Model)
// created by browser as the html load into the browser.
//browser creates object of html called 'document object' in which there is a model of complete HTML in tree like structure

console.log(document.URL) // gives url of the current page

//getting HTML elements using "querySelector" for one element and "querySelectorAll" for multiple elements 
let resultedElement = document.querySelectorAll('p') //gives node list
console.log(resultedElement)

let resulted2Element = document.querySelector('#coders') //works for id, class, element
console.log(resulted2Element)

resultedElement.forEach(element => {
    console.log(element)
});

//get elements by tagName
let tagNameElements = document.getElementsByTagName('p');
let classNameElements = document.getElementsByClassName('coderdost');
let idNameElements = document.getElementsByTagName('coders');
console.log(tagNameElements) //gives HTML collection

// tagNameElements.forEach(element => {
//     console.log(element)
// });
//querySelector is a better method

// Updating and changing Content

let content = document.querySelector(".content")
content.innerHTML = "<p>Greaat</p>" //generally should not do this

console.log(content.innerText) //shows only the text
console.log(content.innerHTML) //shows all elements included

// getting and setting atributes

let surpriseLink = document.querySelector('a')
console.log(surpriseLink.getAttribute('href')) //to get an attribute

surpriseLink.setAttribute('href', 'https://www.youtube.com/watch?v=pYCvsd5yCBs')
console.log(surpriseLink.getAttribute('href'))
surpriseLink.innerText = "Valuable Information"

// adding style
let text = document.querySelector('#coders')
text.style.color = "red"
text.style.backgroundColor = "yellow"

//add , remove , replace class of element

let coderDost = document.querySelector(".coderdost")
coderDost.classList.add("newClass")
// coderDost.classList.remove("newClass")
coderDost.classList.replace("coderdost", "coder-dost")

//parent, Children and sibling elements
let parentElement = document.querySelector(".parent")
//all children of parent
console.log(parentElement.children)
console.log(Array.from(parentElement.children)) //Array.from() converts any iterable object to array

Array.from(parentElement.children).forEach( element =>{
    element.classList.add("child")
})
console.log(parentElement.children)

//find parent of child
let childElement = document.querySelector("#middle-child")
console.log(childElement.parentElement)

//find next/prev sibling
console.log(childElement.nextElementSibling)
console.log(childElement.previousElementSibling)