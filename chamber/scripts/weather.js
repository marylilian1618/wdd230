// Current temp
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#description-temp');
const weatherForecast = document.getElementById('weather-forecast'); // Removed #
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-12.07&lon=-75.21&units=imperial&appid=7d1799cb656dd7ec926774e34069fc68`;

// Function to fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing
            displayResults(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

// Function to display current temperature
function displayResults(data) {
    currentTemp.textContent = `${data.list[0].main.temp.toFixed()}°F`; // Use textContent for security
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "icon");
    weatherIcon.style.width = '100px';
    weatherIcon.style.height = '100px';
    captionDesc.textContent = ` ${desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`; // Capitalize each word
}

// Function to display weather forecast
function displayForecast(data) {
    for (let i = 0; i < data.list.length; i++) {
        const div = document.createElement("div");
        const forecast = data.list[i];
        if (forecast.dt_txt.includes("21:00")) {
            const temp = document.createElement('p');
            const date = document.createElement('p');
            const dateformat = forecast.dt_txt.substring(0, 10);
            temp.textContent = `${forecast.main.temp.toFixed(0)}°F`;
            date.textContent = `${dateformat}`;

            const icon = document.createElement('img');
            const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;

            const description = document.createElement('p');
            let desc = forecast.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

            icon.setAttribute('src', iconsrc);
            icon.setAttribute("alt", desc)
            description.textContent = desc;

            div.appendChild(date);
            div.appendChild(icon);
            div.appendChild(temp);
            div.appendChild(description);
            weatherForecast.appendChild(div);
        }
    }
}
