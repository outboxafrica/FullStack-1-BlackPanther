// // let username = document.getElementById('username');
// // let password = document.getElementById('password');


let username = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');
let password2 = document.getElementById('password2');




username.addEventListener('textInput', username_Verify);
email.addEventListener('textInput', email_Verify);

function validated(){
    if(username.value.length < 9){
       username.className = 'input-field error';
       username.focus();
       return false;
    }
     if(email.value.length < 6){
       email.className = 'input-field error';
       email.focus();
       return false;
    }
}
function username_Verify(){
    if(username.value.length >=8 ){
        username.className = 'input-field success';
        username.focus();
        return true;
    }
}
function email_Verify(){
    if(email.value.length >= 8){
        email.className = 'input-field success';
        email.focus();
        return true;
    }
}

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
