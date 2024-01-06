// Получаем элементы DOM для локации
const locationWrapper = document.querySelector(".select__location");
const locationSelectBtn = locationWrapper.querySelector(".select__input");
const locationOptions = locationWrapper.querySelector(".options");

// Получаем элементы DOM для участников
const participantsWrapper = document.querySelector(".select__participants");
const participantsSelectBtn =
  participantsWrapper.querySelector(".select__input");
const participantsOptions = participantsWrapper.querySelector(".options");

// Задаем начальные данные
let countries = ["Локация для тура", "Великобритания", "Россия", "США"];
let participants = ["Участники", "Участник 1", "Участник 2", "Участник 3"];

// Функция для добавления опций в выпадающий список
function addOptions(optionsElement, itemList, selectBtn) {
  optionsElement.innerHTML = "";

  itemList.forEach((item, index) => {
    let isSelected = index === 0 ? "selected" : "";
    let isDisabled =
      index === 0 || item === "Локация для тура" ? "disabled" : "";

    let li = `<li onclick="updateName(this, '${item}')" class="${isSelected}" ${isDisabled}>${item}</li>`;
    optionsElement.insertAdjacentHTML("beforeend", li);
  });
}

// Функция для обновления выбранного значения
function updateName(selectedLi, selectedValue) {
  if (!selectedLi.hasAttribute("disabled")) {
    const selectWrapper = selectedLi.closest(
      ".select__location, .select__participants"
    );
    const selectBtn = selectWrapper.querySelector(".select__input");

    selectBtn.querySelector(".select__name").innerText = selectedValue;
    selectWrapper.classList.remove("active");
  }
}

// Обработчики событий для открытия/закрытия выпадающих списков
locationSelectBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  locationWrapper.classList.toggle("active");
  participantsWrapper.classList.remove("active");
});

participantsSelectBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  participantsWrapper.classList.toggle("active");
  locationWrapper.classList.remove("active");
});

// Функция для проверки заполнения формы
function submitSelection() {
  const locationSelect = document.querySelector(
    ".select__location .select__name"
  );
  const arrivalDateInput1 = document.getElementById("arrivalDate");
  const arrivalDateInput2 = document.getElementById("arrivalDate2");
  const participantsSelect = document.querySelector(
    ".select__participants .select__name"
  );

  if (
    locationSelect.innerText === "Локация для тура" ||
    arrivalDateInput1.value === "" ||
    arrivalDateInput2.value === "" ||
    participantsSelect.innerText === "Участники"
  ) {
    alert("Пожалуйста, заполните все поля перед отправкой формы.");
  } else {
    // Ваши действия после успешного заполнения формы
  }
}

// Заполняем выпадающие списки начальными данными
addOptions(locationOptions, countries, locationSelectBtn);
addOptions(participantsOptions, participants, participantsSelectBtn);

// Обработчик события для закрытия выпадающих списков при клике вне области
document.addEventListener("click", () => {
  locationWrapper.classList.remove("active");
  participantsWrapper.classList.remove("active");
});
