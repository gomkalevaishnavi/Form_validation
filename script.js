var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validateName(){
     var name = document.getElementById('contact-name').value;

     if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
     }

     if(!name.match(/^[a-zA-Z\s'-]+$/)){
        nameError.innerHTML = 'Name is required';
           return false;
     }
     nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;
}

function validatePhone(){
   var phone = document.getElementById('contact-phone').value;
   if(phone.length == 0){
      phoneError.innerHTML = 'Phone no. is required';
      return false;
   }

   if(phone.length !== 10){
      phoneError.innerHTML = 'Phone no. should be 10 digit';
      return false;
   }

   if(!phone.match(/^[0-9]{10}$/)){
      phoneError.innerHTML = 'Phone no. is required';
      return false;
   }
   phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
   return true;
}

function validateEmail(){
   var email = document.getElementById('contact-email').value;

   if(email.length == 0){
      emailError.innerHTML = 'Email is required';
      return false;
   }
   if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
      emailError.innerHTML = 'Email invalide';
      return false;
   }

   emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
   return true;

}

function validateMsg(){

   var msg = document.getElementById('contact-msg').value;
   var requird = 30;
   var left = requird-msg.length;

   if(left > 0){
      msgError.innerHTML = left + 'more character requird';
      return false;
   }
 msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}


function validateForm(){
   if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
   submitError.style.display = 'block';
      submitError.innerHTML = 'Please fill required information';
      setTimeout(function(){ submitError.style.display = 'none';},3000)
      return false
   }
  
   
}