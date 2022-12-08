var X = document.getElementById("show");
var Y = document.getElementById("hide");
var Z = document.getElementById("texte");

X.onclick = function () {
  Z.style.display = "block";
};

Y.onclick = function () {
  Z.style.display = "none";
};
