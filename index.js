var minus = document.getElementById("minusButton");
var plus = document.getElementById("toggleButton");

document.getElementById("toggleButton").addEventListener("click", function () {
  var texto = document.getElementById("texto");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
});
document.getElementById("minusButton").addEventListener("click", function () {
  var texto = document.getElementById("texto");
  if (texto.style.display === "block") {
    texto.style.display = "none";
  }
});
document.getElementById("toggleButton").addEventListener("click", function () {
  if (minus.style.display === "none") {
    minus.style.display = "block";
    plus.style.display = "none";
  } else {
    minus.style.display = "none";
  }
});

document.getElementById("minusButton").addEventListener("click", function () {
  if (minus.style.display === "block") {
    minus.style.display = "none";
    plus.style.display = "block";
  }
});
