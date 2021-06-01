// localstorage 
let information = [];

let addInformation =(ev) =>{
    ev.preventDefault();

    let data ={
username: document.getElementById('username').value,
email: document.getElementById('email').value,
password: document.getElementById('password').value,
password2: document.getElementById('password2').value
    }
    information.push(data);
    document.querySelector('form').reset();

    localStorage.setItem('Registered', JSON.stringify(information) );
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('button').addEventListener('click', addInformation);

});

// log in
function registered(){
    return JSON.parse(localStorage.getItem('Registered'));
}
let loginbtn = document.getElementById('login_btn')

loginbtn.addEventListener('click',registered());

// log out
function logOut(){
    return localStorage.removeItem('Registered');
}

let logoutbtn = document.getElementById('logout_btn')

// logoutbtn.addEventListener('click',logOut());