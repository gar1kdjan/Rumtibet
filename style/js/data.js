document.addEventListener("DOMContentLoaded", function () {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; // Январь - 0, Февраль - 1, и так далее
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  document.getElementById("arrivalDate").setAttribute("min", today);
  document.getElementById("arrivalDate").setAttribute("max", "2024-01-01");

  document.getElementById("arrivalDate2").setAttribute("min", today);
  document.getElementById("arrivalDate2").setAttribute("max", "2024-01-01");
});
