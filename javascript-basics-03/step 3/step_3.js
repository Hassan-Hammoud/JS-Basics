let G = document.querySelector(".green");
let R = document.querySelector(".red");
let B = document.querySelector(".blue");
let T = document.getElementById("text");

G.onclick = function () {
  T.style.color = "green";
};

R.onclick = function () {
  T.style.color = "red";
};

B.onclick = function () {
  T.style.color = "blue";
};
