function calculateWindChill() {
    var temperatureInput = document.getElementById('temperature').value;
    var windSpeedInput = document.getElementById('windSpeed').value;
    //condicional 
    if (temperatureInput <= 50 && windSpeedInput > 3.0) {
        var windChill = calculateWindChillValue(temperatureInput, windSpeedInput);
        document.getElementById('windChillResult').innerText = 'Wind Chill: ' + windChill.toFixed(2) + ' F°';
    } else {
        //No se cumple el si
        document.getElementById('windChillResult').innerText = 'N/A';
    }
}

function calculateWindChillValue(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}
