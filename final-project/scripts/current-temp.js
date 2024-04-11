const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#description-temp');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.06&lon=-75.20&units=imperial&appid=cabe9a3506f3a25de8dc6f81e852982f';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); for testing
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed()}&deg;F`; //no decimals .toFixed()
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "icon");
    captionDesc.textContent = `- ${desc.toUpperCase()}`// uppercase string
}
