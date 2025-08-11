const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("2025-08-30T00:00:00-04:00").getTime();

function timer(){
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate; 

    const days = Math.floor(distance / 1000 / 60/ 60/ 24) //  divide miliseconds, minutes, hours, 24
    const hours = Math.floor(distance / 1000 / 60/ 60) % 24; // divide miliseconds, minutes, hours, reminder 24
    const minutes = Math.floor(distance / 1000 / 60) % 60;  // divide miliseconds, minutes,reminder hours (60)
    const seconds = Math.floor(distance / 1000) % 60; // divide miliseconds reminder minutes (60) 

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes; 
    Seconds.innerHTML = seconds; 

    // console.log(days + ":" + hours +":" + minutes + ":" + seconds);
}

setInterval(timer,1000)

function showSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

///////

const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const comment = document.getElementById('comment');
const form = document.getElementById('form')

form.addEventListener('submit',(e) => { 
    e.preventDefault();

    validateInputs();

});

const setError = ( element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}

const success = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText= '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () =>{
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const commentValue = fullName.value.trim();

    let isValid = true;

    if (fullNameValue === ''){
        setError(fullName, "Full name is required")
        isValid =false;
    } else{
        success(fullName);
    }

        if (emailValue === ''){
        setError(email, "Email is required")
        isValid =false;
    } else{
        success(email);
    }

        if (phoneValue === ''){
        setError(phone, "Phone number is required")
        isValid = false;
    } else{
        success(phone);
    }

        if (commentValue === ''){
        setError(comment, "Comment is required")
        isValid = false
    } else{
        success(comment);
    }

    if(isValid){
        alert(" Your form was sent!");
        form.reset();
    }
}