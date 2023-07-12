//Form Events (submit Form)
let form = document.querySelector('.sign-up-form')
// let email = document.querySelector('#email')
// let password = document.querySelector('#password')

// form.addEventListener('submit', (e) =>{
//     e.preventDefault(); //Event aage pass hone se rokta hai
//     console.log(email.value, password.value)
// })

//Password regular expression:
        // length >= 8
        // at least one:
        //     uppercase char
        //     lowercase char
        //     digit
let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
let usernamePattern = /^[A-Za-z]{6,12}$/

//better way is to use the name attribute
form.addEventListener('submit', (e) =>{
    e.preventDefault(); //Event aage pass hone se rokta hai
    console.log(form.userEmail.value, form.userPassword.value)
    let password = form.userPassword.value.match(passwordPattern)
    if(password){
        console.log("Password Strong")
    }
    else{
        console.log("Password not strong. Try again")
    }
    
})

// Live feedback
let user = document.querySelector('#username')
user.addEventListener('keyup', (e) => {
    if(usernamePattern.test(e.target.value)){ //test method return boolean value
        user.setAttribute('class', "success")// better to use in this situation as setAttribute as it overrides the current class
    }
    else{
        user.classList.add('error')// not better in this situation as it just adds another class
        //better method in general as we can use add, replace and delete classes
    }
})