let height = document.getElementById("height");
let birthDate = document.getElementById("birthdate");

document.getElementById("validate").onclick = function getUserInput() {
  alert((height.value * 2 + 5) *50 - birthDate.value + 1766);
};
