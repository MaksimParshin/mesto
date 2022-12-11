document.addEventListener("DOMContentLoaded", function () {
  let name = document.querySelector(".profile__name");
  let profession = document.querySelector(".profile__profession");
  let editButton = document.querySelector(".profile__edit-button");
  let closeButton = document.querySelector(".popup__close-button");
  let inputName = document.querySelector(".popup__input_name");
  let inputProfession = document.querySelector(".popup__input_profession");
  let submitForm = document.querySelector(".popup__container");
  let popup = document.querySelector(".popup");

  function openPopup() {
    editButton.addEventListener("click", function (e) {
      popup.classList.add("popup_opend");
      inputName.value = name.textContent;
      inputProfession.value = profession.textContent;
    });
  }

  function closePopup() {
    closeButton.addEventListener("click", function (e) {
      popup.classList.remove("popup_opend");
    });
  }

  function handleFormSubmit() {
    submitForm.addEventListener("submit", function (e) {
      e.preventDefault();
      name.textContent = inputName.value;
      profession.textContent = inputProfession.value;
      popup.classList.remove("popup_opend");
    });
  }

  openPopup();
  closePopup();
  handleFormSubmit();
});
