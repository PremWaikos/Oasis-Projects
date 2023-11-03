function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("unitSelector").value;
    const result = document.getElementById("result");

    if (temperatureInput === '' || isNaN(temperatureInput)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    const inputTemperature = parseFloat(temperatureInput);
    let convertedTemperature;

    if (unit === 'celsius') {
        convertedTemperature = (inputTemperature * 9 / 5) + 32;
        result.innerHTML = convertedTemperature.toFixed(2) + " °F";
    } else {
        convertedTemperature = (inputTemperature - 32) * 5 / 9;
        result.innerHTML = convertedTemperature.toFixed(2) + " °C";
    }
}
