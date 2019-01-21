let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

document.getElementById("validate").onclick = function getUserInput() {
  alert(firstNumber.value % secondNumber.value );
};
