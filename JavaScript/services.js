 let openPopupBtns = document.querySelectorAll('[data-popup-target]');
 let closePopupBtns = document.querySelectorAll('[data-close-button]');
 let overlay = document.getElementById('overlay');
 let send = document.querySelector('.submit');

 openPopupBtns.forEach(button =>{
     button.addEventListener('click', () =>{
      let popup = document.querySelector(button.dataset.popupTarget)  
      openPopup(popup)
     })
 });

closePopupBtns.forEach(button => {
button.addEventListener('click', () =>{
    let popup = button.closest('.popup')
    closePopup(popup)
    })
 });



 function openPopup(popup){
     if (popup == null) return
     popup.classList.add('active')
     overlay.classList.add('active')
 }

 function closePopup(popup){
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

function myfun(){

    // let username = document.getElementById('username').value
    
    // let email = document.getElementById('email').value
    
    // let address = document.getElementById('address').value
   
    // let tel= document.getElementById('tel').value
    
    let inputField = document.querySelector('.input.field');
if(inputField === '') {
    alert("Fill in");
}else{
    alert("You will receive an email shortly ");
    
}
  

}



