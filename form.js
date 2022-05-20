const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit', e=>{
e.preventDefault();

checkInputs();
});

function checkInputs() {

const usernameValue = username.value.trim();
const emailValue = email.value.trim();
//const emailValue = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();
const phonenumberValue = phonenumber.value.trim();


if(usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
    } else {
    setSuccessFor(username);
    }

if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
     } else if (!isEmail(emailValue)) {
//}else if(email.matches(emailValue)){
    setErrorFor(email, 'Not a valid email');
    } else {
    setSuccessFor(email);
    }
    
if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
    } else {
    setSuccessFor(password);
    }
    
if(password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
    } else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
    } else{
    setSuccessFor(password2);
    }

if(phonenumberValue === '') {
    setErrorFor(phonenumber, 'Phonenumber cannot be blank');
    } 
    else{
    setSuccessFor(phonenumber);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    }
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    }

    function isEmail(emailValue) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }
    
    
    
    
    
    










