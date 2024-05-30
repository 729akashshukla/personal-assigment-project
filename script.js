const form=document.getElementById('form');
const uname =document.getElementById('uname');
const email =document.getElementById('email');
const gender =document.getElementById('mygclass');
const password =document.getElementById('password');
const password2 =document.getElementById('password2');
const age =document.getElementById('age');
const term_and_condition=document.getElementById('tandc')

form.addEventListener('submit',e=>{

 e.preventDefault();

  validateInputs();


});

const setError =(element,message)=>{

const inputControl =element.parentElement;
const errorDisplay =inputControl.querySelector('.error');


errorDisplay.innerText =message ;
inputControl.classList.add('error');
inputControl.classList.remove('sucess');


}
const setSuccess =element=>{
const inputControl=element.parentElement;
const errorDisplay =inputControl.querySelector('.error');
errorDisplay.innerText='';
inputControl.classList.add('success');
inputControl.classList.remove('error')
}


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs =()=>{

const unameValue =uname.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();
const ageValue =age.value;

if( unameValue ===''){
    setError(uname ,'name is required');
    }else{
    
    setSuccess(uname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if(ageValue ===''){
        setError(age,'age cannot be empty');
    
    }else if(ageValue>18 && ageValue<100)
    {
        setSuccess(age);
    
    }else(
        setError(age,'age cannot less than 18 and greater than 100')
    )

    if(term_and_condition.checked){
        setSuccess(term_and_condition);

    }else{
        setError(term_and_condition,"please raed the terms and conditiom")
    }
 

};