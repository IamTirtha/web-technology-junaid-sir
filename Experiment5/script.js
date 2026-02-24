function calculate(operator) {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let result;

  if (num2 === 0) {
    return "Number connot be divided by zero!!";
  }
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }
  console.log(document.getElementById('result').innerText='Result :'+result);
}
