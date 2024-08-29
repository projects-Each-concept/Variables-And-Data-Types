const buttons = document.querySelectorAll('button');
const userInput = document.querySelector('.user-input');
const resultDiv = document.querySelector('#output');
//userTemp was declared outside the event listener: When userTemp is declared outside the addEventListener callback, it captures the value of userInput.value at the time the script is initially run. If the input is empty at that point, userTemp will always be empty.

//Now, userTemp is declared inside the event listener: By moving userTemp inside the event listener, you ensure that it captures the most recent value of userInput.value whenever a button is clicked.
let calTemp = 0
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const userTemp = userInput.value.trim();
    if (userTemp == '') {
      alert("Please Enter Some Value")
      throw new Error("Please enter a temperature")
    }
    
    const temp = Number(userTemp);
    const unit = e.target.name.split('-')[0];
    const outputUnit = e.target.name.split('-')[2];
    if (unit == 'Celsius' && outputUnit == 'Fahrenheit') {
      calTemp = (temp * 9 / 5) + 32
    }
    else if (unit == 'Celsius' && outputUnit == 'Kelvin') {
      calTemp = temp + 273.15
    } else if (unit == 'Fahrenheit' && outputUnit == 'Celsius') {
      calTemp = (temp - 32) * 5 / 9
    } else if (unit == 'Fahrenheit' && outputUnit == 'Kelvin') {
      calTemp = (temp - 32) * 5 / 9 + 273.15
    } else if (unit == 'Kelvin' && outputUnit == 'Fahrenheit') {
      calTemp = (temp - 273.15) * 9 / 5 + 32
    } else if (unit == 'Kelvin' && outputUnit == 'Celsius'){
    calTemp = temp - 273.15
  }
    resultDiv.innerHTML=calTemp;
  })
})
