const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#description-temp');
const windspeed = document.querySelector('#speed');
const weatherForecast = document.getElementById('weather-forecast');
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-12.07&lon=-75.21&units=imperial&appid=7d1799cb656dd7ec926774e34069fc68`;

//function to fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //for testing
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

//function to display current temperature
function displayResults(data) {
    let temperature = data.list[0].main.temp.toFixed()
    let windSpeed = data.list[0].wind.speed;
    const image = document.createElement('img');

    windspeed.textContent = `${windSpeed}mph`
    currentTemp.textContent = `${temperature}°F`;

    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    image.setAttribute('src', iconsrc);
    image.setAttribute('alt', "icon");
    image.style.width = '100px';
    image.style.height = '100px';
    weatherIcon.appendChild(image);

    let desc = data.list[0].weather[0].description;
    captionDesc.textContent = ` ${desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;

    function calculateWindChill(tem, windS) {
        return 35.74 + (0.6215 * tem) - 35.75 * Math.pow(windS, 0.16) + 0.4275 * tem * Math.pow(windS, 0.16);
    }
    function updateWindChill() {

        if (temperature <= 50 && windSpeed > 3) {
            let windChill = calculateWindChill(temperature, windSpeed);
            document.getElementById('windchill').textContent = windChill.toFixed(0) + ' deg';
        } else {
            document.getElementById('windchill').textContent = 'N/A';
        }
    }
    updateWindChill();

}

//function to display weather forecast
function displayForecast(data) {
    let currentDate = '';
    let daysCount = 0;
    for (let i = 1; i < data.list.length; i++) {
        const forecast = data.list[i];
        const forecastDate = forecast.dt_txt.substring(0, 10);
        if (forecast.dt_txt.includes("21:00") && currentDate !== forecastDate && daysCount < 4) {
            const dateHeader = document.createElement('p');
            dateHeader.textContent = forecastDate;
            currentDate = forecastDate;

            const div = document.createElement("div");
            const temp = document.createElement('p');
            temp.textContent = `${forecast.main.temp.toFixed(0)}°F`;

            const icon = document.createElement('img');
            const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
            icon.setAttribute('src', iconsrc);
            icon.setAttribute('alt', forecast.weather[0].description);

            const description = document.createElement('p');
            description.textContent = forecast.weather[0].description.charAt(0).toUpperCase() + forecast.weather[0].description.slice(1);

            div.appendChild(dateHeader);
            div.appendChild(temp);
            div.appendChild(icon);
            div.appendChild(description);
            weatherForecast.appendChild(div);

            daysCount++;
        }
    }
}

