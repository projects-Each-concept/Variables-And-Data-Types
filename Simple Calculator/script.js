const outputBox = document.querySelector(".calculator__output");
const keys = document.querySelector(".calculator__keys");

keys.addEventListener("click", (e) => {
  if (e.target.innerHTML === 'AC') {
    outputBox.innerHTML = '0';
  } else {
    if (e.target.innerHTML === '0' && outputBox.innerHTML === '0') {
      outputBox.innerHTML = '';
    }
    if (e.target.innerHTML) {
      if (outputBox.innerHTML === '0' && e.target.innerHTML !== '0') {
        outputBox.innerHTML = e.target.innerHTML;
      } else {
        outputBox.innerHTML += e.target.innerHTML;
      }
    }
  }

  const operands = outputBox.innerHTML.split(/[\+\-\÷\×]/);
  const operators = outputBox.innerHTML.split(/[0-9]/).filter(Boolean);

  if (e.target.innerHTML === '=' && outputBox.innerHTML !== '' && operands.length >= 2) {
    // Remove '=' from the end if it's present
    let expression = outputBox.innerHTML.replace(/×/g, '*').replace(/÷/g, '/');
    if (expression.endsWith('=')) {
      //endsWith: This is a string method that checks if a string ends with a specified               substring. For example, "hello".endsWith("lo") returns true because the string "hello"         ends with "lo"
      expression = expression.slice(0, -1); // Remove the last '='
    }
    try {
      const result = eval(expression);
      outputBox.innerHTML = result;
    } catch (error) {
      outputBox.innerHTML = 'Error';
      console.error('Invalid expression:', error);
    }
  }
});
