function showWindChill(temp, speed) {
    // Get the windchill DOM element
    const windchillSpan = document.getElementById("windchill");
    // Set default windchill message
    let message = "N/A";
    
    // Check for valid temp/windspeed
    if (temp <= 50 && speed > 3) {
        // Get chillfactor and windchill calculation
        let chillfactor = Math.pow(speed, 0.16);
        let chill = Math.round(35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor));
        // Create windchill message
        message = `${chill}`;
    }

    // Set the DOM element windchillmessage
    windchillSpan.textContent = message;
}

const temperatureSpan = document.getElementById('temperature');
const windspeedSpan = document.getElementById('windspeed');
const temperature = parseInt(weather-temp.textContent);
const windspeed = parseInt(windspeedSpan.textContent);

showWindChill(temperature, windspeed);