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
  document.getElementById("arrivalDate").setAttribute("max", "2200-12-31");
  document.getElementById("arrivalDate").setAttribute("maxlength", "10"); // Add maxlength attribute

  document.getElementById("arrivalDate2").setAttribute("min", today);
  document.getElementById("arrivalDate2").setAttribute("max", "2200-12-31");
  document.getElementById("arrivalDate2").setAttribute("maxlength", "10"); // Add maxlength attribute

  // Ограничение по году в выпадающем календаре
  document.querySelectorAll("input[type='date']").forEach(function (el) {
    el.addEventListener("input", function () {
      var selectedDate = new Date(this.value);
      var maxDate = new Date("2200-12-31");

      if (selectedDate > maxDate) {
        this.setCustomValidity("Выберите дату до 2200-12-31");
      } else {
        this.setCustomValidity("");
      }
    });
  });

  // Функция для проверки заполнения формы
  function submitSelection() {
    var arrivalDateInput1 = document.getElementById("arrivalDate");
    var arrivalDateInput2 = document.getElementById("arrivalDate2");

    var selectedYear1 = new Date(arrivalDateInput1.value).getFullYear();
    var selectedYear2 = new Date(arrivalDateInput2.value).getFullYear();

    var maxYear = 2200;

    if (selectedYear1 > maxYear || selectedYear2 > maxYear) {
      alert("Выберите дату до 2200-12-31");
    } else {
      // Ваши действия после успешного заполнения формы
    }
  }
});
