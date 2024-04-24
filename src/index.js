import "./style.css";
import "normalize.css";

let today = document.getElementsByClassName("today")[0];
let yesterday = document.getElementsByClassName("yesterday")[0];
let tomorrow = document.getElementsByClassName("tomorrow")[0];

async function updateUI(city) {
  let weatherObject = await getWeatherUpdate(city);
  console.log(weatherObject);
  today.textContent = `Weather in ${city} is ${weatherObject.current.temp_c}`;
  yesterday.textContent = city;
  tomorrow.textContent = city;
}

async function getWeatherUpdate(city) {
  try {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=08c3faaf5975468aa23225611241904&q=${city}&aqi=no`
    );

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

updateUI("abbotsford");
