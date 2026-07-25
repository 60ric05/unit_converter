/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
inputEl = document.getElementById("input-el")
convertBtn = document.getElementById("convert-btn")
lengthEl = document.getElementById("length-el")
volumeEl = document.getElementById("volume-el")
massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    let inputValue = inputEl.value
    lengthEl.textContent = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`
    volumeEl.textContent = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`
    massEl.textContent = `${inputValue} kilograms = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilograms`
    inputEl.value = "-"
})