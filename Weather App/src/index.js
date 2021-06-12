let currentTime = new Date();
let currentDate = currentTime.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

let formattedDate = `${day} ${currentDate}, ${hours}:${minutes}`;
console.log(formattedDate);

let current = document.querySelector("#date-time");
current.innerHTML = `${day} ${currentDate}, ${hours}:${minutes}`;

function cityName(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-name");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", cityName);

function changeToCelcius(event) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  h2.innerHTML = `CURRENTLY 32ºC`;
}

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", changeToCelcius);

function changeToFahrenheit(event) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  h2.innerHTML = `CURRENTLY 90ºF`;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", changeToFahrenheit);
