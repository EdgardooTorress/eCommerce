window.onload = function() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        let productsHtml = "";
        for (let i = 0; i < data.length; i++) {

          let item = data[i];
  
          let product = `
            <div class="fragance"${i+1}>
            <img src="${item.img}" alt="productimg" class="images">
            <h1>${item.name}</h1>
            <h3>${item.description}</h3>
            <p>${item.price}</p>
            <button>Add to Cart</button>
            </div>
          `;

          productsHtml += product;
        }

        let productsContainer = document.getElementsByClassName("box")[0]

        productsContainer.innerHTML = productsHtml;
      })
      
      .catch((error) => {
        console.error("Error fetching data from json file:", error);
      });

};


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