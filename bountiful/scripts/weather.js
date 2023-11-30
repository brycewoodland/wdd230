// Weather for the day
const LAT = 33.1215196;
const LON = -117.3505939;
const APIKEY = 'f69c814af7c03a68b651ec98b5b40807';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayWeather(weatherData) {
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const temperature = weatherData.main.temp.toFixed(0);
    const windspeed = weatherData.wind.speed.toFixed(0);
    const humidity = weatherData.main.humidity.toFixed(0);

    let weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    let weatherDesc = document.querySelector('#weather-desc');
    weatherDesc.innerHTML = `Description: ${desc}`;

    let weatherTemp = document.querySelector('#weather-temp');
    weatherTemp.innerHTML = `${temperature}&deg;F | ${windspeed} mph`;

    let weatherHumid = document.querySelector('#weather-humid');
    weatherHumid.innerHTML = `Humidity: ${humidity}%`;
}

async function getWeather() {
    const response = await fetch(apiURL);
    const data = await response.json();
    displayWeather(data);
}

getWeather();

// Forecast Weather for the next 3 days
const forecastAPIURL = `api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayForecast(forecasts) {
    console.log(forecasts);
}

async function fetchForecast() {
    const response = await fetch(forecastAPIURL);
    const data = response.json();
    displayForecast(data);
}