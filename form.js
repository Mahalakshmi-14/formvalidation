var nameError = document.getElementById("name-error");
var nameError1 = document.getElementById("name-error1");
var phoneError = document.getElementById("phone-error");
var phoneError1 = document.getElementById("phone-error1");
var emailError = document.getElementById("email-error");
var emailError1 = document.getElementById("email-error1");
var passError = document.getElementById("pass-error");
var passError1 = document.getElementById("pass-error1");
var confPassError = document.getElementById("confpass-error");
var confPassError1 = document.getElementById("confpass-error1");
var SubmitError = document.getElementById("Submit-error");

function validateName(){
    var name = document.getElementById('username').value;

    if(name.length == 0){
        //nameError1.style.display="none";
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    else if (name.length <5 || name.length > 15){
        
        nameError.style.display="block";
        nameError.innerHTML = 'must be greater than 5 and less than 15';
        nameError1.style.display="none";
        return false;
    }
    else{
        nameError.style.display="none";
        nameError1.style.display="block";
        nameError1.innerHTML = 'valid username';
    return true;
    }
}

function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == ''){
        emailError.innerHTML = 'Email is Required';
        return false;
    }
    else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3,4}$/)){
        emailError.style.display="block";
        emailError.innerHTML = 'Invalid Email';
        emailError1.style.display="none";
        return false;
    }
    else{
        emailError.style.display="none";
        emailError1.style.display="block";
        emailError1.innerHTML = 'valid email';
    return true;
    }
}

function validatePhone(){
    var phone = document.getElementById('phonenumber').value;

    if(phone.length == ''){
        phoneError.innerHTML = 'Phone No is Required';
        return false;
    }
    else if(phone.length !== 10){
        phoneError.style.display="block";
        phoneError.innerHTML = 'Phone no should be 10 digits';
        phoneError1.style.display="none";
        return false;
    }
    // if(!phone.match(/^[0-9]{10}$/)){
    //     phoneError.innerHTML = 'Only Numbers';
    //     return false;
    // }
    else{
        phoneError.style.display="none";
        phoneError1.style.display="block";
        phoneError1.innerHTML = 'valid phone number';
        return true;
    }
     
}


function validatePassword(){
    var password = document.getElementById('password').value;
     if (password.length == ''){
         passError.innerHTML = 'enter password';
         return false;
     } 

     else if(!password.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,16}$/)){
        passError.style.display="block";
        passError.innerHTML = 'Password must fullfil the requirments';
        passError1.style.display="none";
        return false;

    }
     else if (password.length < 5 || password.length > 9){
         passError.style.display="block";
         passError.innerHTML = 'password must be greater than 5 and less than 8';
         passError1.style.display="none";
         return false;
     }
    else{
        passError.style.display="none";
        passError1.style.display="block";
        passError1.innerHTML = 'valid password';
     
     return true;
    }
}

function validateConfPassword(){
    var confpass = document.getElementById('password2').value;
    var password = document.getElementById('password').value;
    if(confpass.length == ''){
        confPassError.innerHTML = 'Enter confirm password ';
        confPassError1.style.display="none";
        return false;
    }
    else if(confpass != password){
        confPassError.style.display="block";
        confPassError.innerHTML = 'password does not match';
        confPassError1.style.display="none";
        return false;
    }
    else{
        confPassError.style.display="none";
        confPassError1.style.display="block";
        confPassError1.innerHTML = 'password matched';
    return true;
    }

}
function isAlphabet(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 32 && (iKeyCode < 65 || iKeyCode > 90) && (iKeyCode < 97 || iKeyCode > 122))
        return false;
    return true;
  } 
  function isNumber(evt) {
    
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
    return false;
    
return true;
}
function validateForm(){


if( !validateName() || !validateEmail() || !validatePhone() || !validatePassword() || !validateConfPassword() ){
            SubmitError.style.display = 'block';
            SubmitError.innerHTML = 'Please fill all the details';
            
            return false;
        }
        alert("successfully submitted");
    }

// function clear(){
//     nameError.style.display="none";
//     nameError1.style.display="none";
//     phoneError.style.display="none";
//     phoneError1.style.display="none";
//     emailError.style.display="none";
//     emailError1.style.display="none";
//     passError.style.display="none";
//     passError1.style.display="none";
//     confPassError.style.display="none";
//     confPassError1.style.display="none";
//}








// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');
// const phonenumber = document.getElementById('phonenumber');

// form.addEventListener('submit', e=>{
// e.preventDefault();

// checkInputs();
// });

// function checkInputs() {

// const usernameValue = username.value.trim();
// const emailValue = email.value.trim();
// //const emailValue = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const passwordValue = password.value.trim();
// const password2Value = password2.value.trim();
// const phonenumberValue = phonenumber.value.trim();


// if(usernameValue === '') {
//     setErrorFor(username, 'Username cannot be blank');
//     } else {
//     setSuccessFor(username);
//     }

// if(emailValue === '') {
//     setErrorFor(email, 'Email cannot be blank');
//      } else if (!isEmail(emailValue)) {
// //}else if(email.matches(emailValue)){
//     setErrorFor(email, 'Not a valid email');
//     } else {
//     setSuccessFor(email);
//     }
    
// if(passwordValue === '') {
//     setErrorFor(password, 'Password cannot be blank');
//     } else {
//     setSuccessFor(password);
//     }
    
// if(password2Value === '') {
//     setErrorFor(password2, 'Password2 cannot be blank');
//     } else if(passwordValue !== password2Value) {
//     setErrorFor(password2, 'Passwords does not match');
//     } else{
//     setSuccessFor(password2);
//     }

// if(phonenumberValue === '') {
//     setErrorFor(phonenumber, 'Phonenumber cannot be blank');
//     } 
//     else{
//     setSuccessFor(phonenumber);
//     }
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     formControl.className = 'form-control error';
//     small.innerText = message;
//     }
// function setSuccessFor(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
//     }

//     function isEmail(emailValue) {
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,13})+$/
//     }
    
    
    
    
    
    










