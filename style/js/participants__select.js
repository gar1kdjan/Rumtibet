const participantsWrapper = document.querySelector(".participants");
const participantsSelectBtn =
  participantsWrapper.querySelector(".select__input");
const participantsOptions = participantsWrapper.querySelector(".options");

let participants = ["Участники", "4", "5", "6"];

function addParticipants(selectedParticipant) {
  participantsOptions.innerHTML = "";
  participants.forEach((participant, index) => {
    let isSelected =
      index === 0
        ? "selected"
        : participant === selectedParticipant
        ? "selected"
        : "";
    let isDisabled =
      index === 0 ? "disabled" : participant === "Участники" ? "disabled" : "";
    let li = `<li onclick="updateParticipant(this)" class="${isSelected}" style="font-weight: 700; font-size: 16px; line-height: 150%;" ${isDisabled}>${participant}</li>`;
    participantsOptions.insertAdjacentHTML("beforeend", li);
  });
}
addParticipants();

function updateParticipant(selectedLi) {
  if (!selectedLi.hasAttribute("disabled")) {
    addParticipants(selectedLi.innerText);
    participantsWrapper.classList.remove("active");
    participantsSelectBtn.firstElementChild.innerText = selectedLi.innerText;
  }
}

participantsSelectBtn.addEventListener("click", () =>
  participantsWrapper.classList.toggle("active")
);
