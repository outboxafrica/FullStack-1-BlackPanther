// // let username = document.getElementById('username');
// // let password = document.getElementById('password');


let username = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');
let password2 = document.getElementById('password2');
let submitButton = document.querySelector('#button');
let errorElements = document.querySelectorAll('.error-message'); 


// /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

username.addEventListener('input', username_Verify);
email.addEventListener('input', email_Verify);
password.addEventListener('input', password_Verify);
password2.addEventListener('input', password2_Verify);
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function validated(){
    if(username.value.length < 5){
       username.classList.add('error');
       username.focus();
    }

    if(emailRegex.test(email.value)){
       email.classList.add('error');
       email.focus();
    }


    if(password.value.length < 5){
        password.classList.add('error');
        password.focus();
     }
     if(password.value !== password2.value){
        password2.classList.add('error');
        password2.focus();
     }
         if(password.value == password2.value && emailRegex.test(email.value)){
        window.location.assign('../Pages/home.html');
    }
}

function username_Verify(){
    if(username.value.length >=5 ){
        username.classList.add('success');
        username.focus();
        errorElements[0].style.display = 'none';
    }else{
        username.classList.remove('success');
        username.classList.add('error');
        errorElements[0].style.display = 'block';
        errorElements[0].innerText = 'username should be 5 or more characters'
    }

    
    
}
function email_Verify(){
    if(emailRegex.test(email.value)){
        email.classList.add('success');
        email.focus();
        errorElements[1].style.display = 'none';
    }else{
        email.classList.remove('success');
        email.classList.add('error');
        errorElements[1].style.display = 'block';
        errorElements[1].innerText = 'include an "@"  eg. example@gmail.com'
    }
}

function password_Verify(){
    if(password.value.length >=7 ){
        password.classList.add('success');
        password.focus();
        errorElements[2].style.display = 'none';
    }else{
        password.classList.remove('success');
        password.classList.add('error');
        errorElements[2].style.display = 'block';
        errorElements[2].innerText = 'password should be 7 or more characters'
    }

    
    
}
function password2_Verify(){
    if(password.value == password2.value){
        password2.classList.add('success');
        password2.focus();
        errorElements[3].style.display = 'none';
    }
    
    else{
        password2.classList.remove('success');
        password2.classList.add('error');
        errorElements[3].style.display = 'block';
        errorElements[3].innerText = 'password does not match'
    }

    
    
}

submitButton.addEventListener('click',validated);

// register1.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     checkInputs();
// });

// function checkInputs(){
//     // get the values from the inputs
//    let usernameValue = username.value.trim();
//    let emailValue = email.value.trim();
//    let passwordValue = password.value.trim();
//    let password2Value =  password2.value.trim();
    
//    if(usernameValue === ''){
//     //    show error
//     setErrorFor(username);
//    }else{
//     //    add success
//     setSuccessFor(username);
//    } 

//    if(emailValue === ''){
//     //    show error
//     setErrorFor(email);
//    }else{
//     //    add success
//     setSuccessFor(email);
//    } 

//    if(passwordValue === ''){
//     //    show error
//     setErrorFor(password);
//    }else{
//     //    add success
//     setSuccessFor(password);
//    }  

//    if(password2Value === ''){
//     //    show error
//     setErrorFor(password2);
//    }else if(passwordValue !== password2Value){
//     setErrorFor(password2);
//    }
//    else{
//     //    add success
//     setSuccessFor(password2);
//    }
// }

// function setErrorFor(input){
//     let input2 = document.querySelector('.input-field');

//     // add error class
//     input2.className = 'input-field error';
// }

// function setSuccessFor(input){
//     let input2 = document.querySelector('.input-field');

//     // add successclass
//     input2.className = 'input-field success';
// }
