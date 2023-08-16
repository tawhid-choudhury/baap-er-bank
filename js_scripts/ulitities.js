function getNumberFromInputValue(inputName) {
  return parseFloat(document.getElementById(inputName).value);
}
function getNumberFromString(spanName) {
  return parseFloat(document.getElementById(spanName).innerText);
}
function setInnertext(spanName, amount) {
  document.getElementById(spanName).innerText = amount;
}
function updateDisplay(innertext, value, disName, addOrSubtract) {
  let amount = 0;
  if (addOrSubtract) {
    amount = getNumberFromString(innertext) + getNumberFromInputValue(value);
  }
  if (!addOrSubtract) {
    amount = getNumberFromString(innertext) - getNumberFromInputValue(value);
  }
  setInnertext(disName, amount);
}
