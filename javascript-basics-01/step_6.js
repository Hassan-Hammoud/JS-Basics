document.getElementById("validate").onclick = function () {
  firstnumber = document.getElementById("first_number").value;
  secondnumber = document.getElementById("second_number").value;
  alert("the Result : " + (firstnumber % secondnumber));
};
