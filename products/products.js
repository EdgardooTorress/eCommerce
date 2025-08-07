
const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("August 30 2025 00:00:00:00").getTime();

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