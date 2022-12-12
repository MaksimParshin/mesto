let name1 = document.querySelector(".profile__name");
let profession = document.querySelector(".profile__profession");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button");
let inputName = document.querySelector(".popup__input_name");
let inputProfession = document.querySelector(".popup__input_profession");
let submitForm = document.querySelector(".popup__container");
let popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.add("popup_opend");
  inputName.value = name1.textContent;
  inputProfession.value = profession.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opend");
}

function handleFormSubmit(e) {
  e.preventDefault();
  name1.textContent = inputName.value;
  profession.textContent = inputProfession.value;
  closePopup();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
submitForm.addEventListener("submit", handleFormSubmit);
