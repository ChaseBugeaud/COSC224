
function getValue() {
  let binaryValue = document.getElementById("binary-input").value;
  if (!/^[01]{1,32}$/.test(binaryValue)) {
    alert("must be a binary number up to 32 bits long");
  }
  outputDecimal(binaryValue);
}

function outputDecimal(binaryValue) {
  let outputP = document.getElementById("decimal-output");
  outputP.textContent = binaryToDecimal(binaryValue).toString();
}

function binaryToDecimal(binaryValue) {
  return parseInt(binaryValue, 2);
}
