let age = document.getElementById("age");

document.getElementById("validate").onclick = function getUserInput () {
  if (age.value >= 18) {
    alert("U bent meerderjarig!")
  } else {
    alert("U bent minderjarig!")
  }
}
