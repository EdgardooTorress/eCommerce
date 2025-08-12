//Run all this only after the whole page has finished loading.
window.onload = function () {
  // Look for the file.
  fetch("products.json")
  //when the value arrives conver it from json to javascript value
    .then((response) => response.json())
    .then((data) => {
      let productsHtml = ""; // One big html string for all products
      for (let i = 0; i < data.length; i++) { // loop thorugh the products
        let item = data[i];

        let product = ` // create the HTML 
            <div class="fragance"${i + 1}>
            <img src="${item.img}" alt="productimg" class="images">
            <h1>${item.name}</h1>
            <h3>${item.description}</h3>
            <p>${item.price}</p>
            <button>Add to Cart</button>
            </div>
          `;

        productsHtml += product; // add this card to the products html
      }

      let productsContainer = document.getElementsByClassName("box")[0];

      productsContainer.innerHTML = productsHtml;
    })

    // if anything fails like file missing, bad JSON, display the error in the console
    .catch((error) => {
      console.error("Error fetching data from json file:", error);
    });
};

// get references to the places where will be print the time
const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const targetDate = new Date("2025-08-30T00:00:00-04:00").getTime();

function timer() {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;
  // covert miliseconds to days, hours,minutes, seconds 
  const days = Math.floor(distance / 1000 / 60 / 60 / 24); //  divide miliseconds, minutes, hours, 24
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24; // divide miliseconds, minutes, hours, reminder 24
  const minutes = Math.floor(distance / 1000 / 60) % 60; // divide miliseconds, minutes,reminder hours (60)
  const seconds = Math.floor(distance / 1000) % 60; // divide miliseconds reminder minutes (60)

  //print the values into the page
  Days.innerHTML = days;
  Hours.innerHTML = hours;
  Minutes.innerHTML = minutes;
  Seconds.innerHTML = seconds;

  // console.log(days + ":" + hours +":" + minutes + ":" + seconds);
}
//update the counter every second
setInterval(timer, 1000);

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
