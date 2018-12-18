const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
    return Math.round(num*100)/100;
}

function celsiusToFahrenheitAndKelvinConversion() {
    // store the value took from user
    const cTempValue = parseFloat(celsiusInput.value);
    // convert input into other units
    const fTempValue = ((cTempValue * (9/5)) + 32);
    const kTempValue = (cTempValue + 273.15);
    // show the result
    fahrenheitInput.value = roundNum(fTempValue);
    kelvinInput.value = roundNum(kTempValue);
}

function fahrenheitToKelvinAndCelsiusConversion() {
    // store the value took from user
    const fTempValue = parseFloat(fahrenheitInput.value);
    // convert input into other units
    const kTempValue = ((fTempValue + 459.67) * (5/9));
    const cTempValue = ((fTempValue - 32) * (5/9));
    // show the result
    kelvinInput.value = roundNum(kTempValue);
    celsiusInput.value = roundNum(cTempValue);
}

function kelvinToCelsiusAndFahrenheitConversion() {
    // store the value took from user
    const kTempValue = parseFloat(kelvinInput.value);
    // convert input into other units
    const cTempValue = (kTempValue - 273.15);
    const fTempValue = ((9/5) * (kTempValue-273) + 32);
    // show the result
    celsiusInput.value = roundNum(cTempValue);
    fahrenheitInput.value = roundNum(fTempValue);
}

function conversion () {
    celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvinConversion);
    fahrenheitInput.addEventListener('input', fahrenheitToKelvinAndCelsiusConversion);
    kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheitConversion);
}

conversion();