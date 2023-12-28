const locationWrapper = document.querySelector(
  ".select__wrapper:not(.participants)"
);
const locationSelectBtn = locationWrapper.querySelector(".select__input");
const locationOptions = locationWrapper.querySelector(".options");

const participantsWrapper = document.querySelector(
  ".select__wrapper.participants"
);
const participantsSelectBtn =
  participantsWrapper.querySelector(".select__input");
const participantsOptions = participantsWrapper.querySelector(".options");

let countries = ["Локация для тура", "Великобритания", "Россия", "США"];
let participants = ["Участники", "Участник 1", "Участник 2", "Участник 3"];

function addOptions(optionsElement, itemList, selectBtn) {
  optionsElement.innerHTML = "";
  itemList.forEach((item, index) => {
    let isSelected = index === 0 ? "selected" : "";
    let isDisabled =
      index === 0 ? "disabled" : item === "Локация для тура" ? "disabled" : "";
    let li = `<li onclick="updateName(this, '${item}')" class="${isSelected}" ${isDisabled}>${item}</li>`;
    optionsElement.insertAdjacentHTML("beforeend", li);
  });
}

function updateName(selectedLi, selectedValue) {
  if (!selectedLi.hasAttribute("disabled")) {
    const selectWrapper = selectedLi.closest(".select__wrapper");
    const selectBtn = selectWrapper.querySelector(".select__input");
    selectBtn.firstElementChild.innerText = selectedValue;
    selectWrapper.classList.remove("active");
  }
}

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

function submitSelection() {
  const locationSelect = document.querySelector(
    ".select__wrapper:not(.participants) .select__name"
  );
  const arrivalDateInput1 = document.getElementById("arrivalDate");
  const arrivalDateInput2 = document.getElementById("arrivalDate2");
  const participantsSelect = document.querySelector(
    ".select__wrapper.participants .select__name"
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

addOptions(locationOptions, countries, locationSelectBtn);
addOptions(participantsOptions, participants, participantsSelectBtn);

document.addEventListener("click", () => {
  locationWrapper.classList.remove("active");
  participantsWrapper.classList.remove("active");
});
