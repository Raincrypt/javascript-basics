let hour = document.querySelector("#hour")
let miniute = document.querySelector("#minute")
let second = document.querySelector("#second")

let currentDate = new Date()
let currentHours = currentDate.getHours()
let currentMinutes = currentDate.getMinutes()
let currentSeconds = currentDate.getSeconds()

hour.innerHTML = currentHours
miniute.innerHTML = currentMinutes
second.innerHTML = currentSeconds

let ticking = () => {
    let currentDate = new Date()
    let currentHours = currentDate.getHours()
    let currentMinutes = currentDate.getMinutes()
    let currentSeconds = currentDate.getSeconds()
    hour.textContent = currentHours
    miniute.textContent = currentMinutes
    second.textContent = currentSeconds
}

setInterval(ticking, 1000)