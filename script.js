const form=document.getElementById('form');
const name =docoment.getElementById('uname');
const email =docoment.getElementById('email');
const gender =docoment.getElementById('gender');
const password =docoment.getElementById('password');
const password2 =docoment.getElementById('password2');

const age =docoment.getElementByI('age');
const term_and_condition=document.getElementById('tandc')

form.addEventListener('submit',e=>{
e.preventDefault();

validateInputs();

});

const setError =(element,message)=>{

const inputControl =element.parentElement;
const errorDisplay =inputControl.querySelector('.error');


errorDisplay.innerText =message;
inputControl.classList.add('error');
inputControl.classList.remove('sucess')


}
const setSuccess =element=>{
const inputControl=element.parentElement;
const errorDisplay =inputControl.querySelector('.error');
errorDisplay.innerText='';
inputControl.classList.add('success');
inputControl.classList.remove('error')
}


const isValidEmail = email=>{
const re=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
return re.test(String(email).toLowerCase());
}


const validateInputs =()=>{
const nameValue =uname.value.trim();
const emailValue =email.value.trim();
const passwordValue =password.value.trim();
const password2Value =password2.value.trim();
const ageValue =age.value.trim();
}

if(nameValue === ''){
setError(uname ,'name is required');
}else{

setSucess(uname);

}

if(emailValue=== ''){
setError(uname ,'Email is required');
}else{

setSucess(email);


}
if(passwordValue ===''){
setError(uname ,'password  is required');
}else if(passwordValue.length<8){
setError(password,'password must be at leart 8 character');

}else{
setSuccess(password);
}

if(password2Value === ''){
setError(password2,'please confirm your password');
}else if(password2Value!==password){
setError(password2,"password doesn't match");
}else{
setSuccess(password2);
}

if(age===''){
    setError(age,'age cannot be empty');

}else if(age<=100 && age>18)
{
    setSuccess(age);
}