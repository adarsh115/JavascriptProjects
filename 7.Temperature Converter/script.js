const temperatureValue = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");

function convertTemperature(value, fromUnit, toUnit, event) {
    event.preventDefault();
    let result;

    // Convert the input value to Celsius first
    switch(fromUnit.toLowerCase()) {
        case 'celsius':
            result = value;
            break;
        case 'fahrenheit':
            result = (value - 32) * 5 / 9;
            break;
        case 'kelvin':
            result = value - 273.15;
            break;
        default:
            throw new Error("Invalid 'fromUnit'. Choose 'Celsius', 'Fahrenheit', or 'Kelvin'.");
    }

    // Convert from Celsius to the desired unit
    switch(toUnit.toLowerCase()) {
        case 'celsius':
            return result;
        case 'fahrenheit':
            return (result * 9 / 5) + 32;
        case 'kelvin':
            return result + 273.15;
        default:
            throw new Error("Invalid 'toUnit'. Choose 'Celsius', 'Fahrenheit', or 'Kelvin'.");
    }
}

function updateConversion() {
    console.log("hi")
    const temperatureInput = document.getElementById('temperature').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (temperatureInput) {
        console.log("inside if")
        const result = convertTemperature(parseFloat(temperatureInput), fromUnit, toUnit, event);
        document.getElementById('conversion').innerText = `Converted Temperature: ${result.toFixed(2)} ${toUnit}`;
    }
}

// Event listeners for dropdown changes and temperature input
fromUnit.addEventListener('change', updateConversion);
toUnit.addEventListener('change', updateConversion);
temperatureValue.addEventListener('input', updateConversion);

temperatureValue.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents the default behavior (form submission)
        // updateConversion();
    }
});