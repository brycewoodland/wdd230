const APIKEY = "de845c8ee8204be2560f6fce6d73ac69";
const LAT = "40.776608";
const LON = "-111.920485";
const apiURl =`api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayWeather(weatherData) {
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const windspeed = weatherData.wind.speed.toFixed(0);
    const temperature = weatherData.main.temp.toFixed(0);

    let weatherIcon = document.querySelector('#weather-icon')
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}

async function getWeather() {
    const response = await fetch(apiURL);
    if (response.ok)
    {
        const data = await response.json();
        displayWeather(data);
    }
    else
    {
        alert("Error connecting to the server.");
    }
}

getWeather();