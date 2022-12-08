document.getElementById("validate").onclick = function () {
  yourage = document.getElementById("age").value;
  if (yourage > 18) alert("you are over 18");
  else if (yourage < 18) alert("you are under 18");
};
