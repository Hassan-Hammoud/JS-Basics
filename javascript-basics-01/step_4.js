document.getElementById("validate").onclick = function () {
  Name = document.getElementById("name").value;
  surname = document.getElementById("surname").value;
  city = document.getElementById("city").value;

  alert(
    "Name : " + Name + "\n" + "Surname : " + surname + "\n" + "City : " + city
  );
};
