document.getElementById("validate").onclick = function () {
  shoe = document.getElementById("shoe_size").value;
  Birth = document.getElementById("year").value;

  Result = (shoe * 2 + 5) * 50 - Birth + 1766;
  alert(Result);
};
