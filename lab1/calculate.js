
function getValue() {
  let binaryValue = document.getElementById("binary-input").value;
  outputDecimal(binaryValue);
}

function outputDecimal(binaryValue) {
  let outputP = document.getElementById("decimal-output");
  outputP.textContent = binaryToDecimal(binaryValue).toString();
}

function binaryToDecimal(binaryValue) {
  return parseInt(binaryValue, 2);
}
