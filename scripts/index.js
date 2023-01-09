const username = document.querySelector(".profile__name");
const profession = document.querySelector(".profile__profession");
const editButton = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__close-button");
const inputName = document.querySelector(".popup__input_value_username");
const inputProfession = document.querySelector(
  ".popup__input_value_profession"
);
const addButton = document.querySelector('.profile__add-button');

const submitForm = document.querySelector(".popup__form");
const popup = document.querySelector(".popup");
const popupProfile = document.querySelector('.popup_name_profile')
const popupElement = document.querySelector('.popup_name_element')
const likeButton = document.querySelector(".element__like-button");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const elementTemplate = document.querySelector(".element-template").content;
const sectionElements = document.querySelector(".elements");

function openPopup(newPopup) {
  newPopup.classList.add("popup_opend");

}

function closePopup(newPopup) {
  newPopup.classList.remove("popup_opend");
}

function handleFormSubmit(e) {
  e.preventDefault();
  username.textContent = inputName.value;
  profession.textContent = inputProfession.value;
  closePopup(popupProfile);
}



function hasLike() {
  likeButton.classList.toggle("element__like-button_state_active");
}

function loadCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const element = elementTemplate.querySelector('.element').cloneNode(true)
    const image = element.querySelector('.element__image').src = initialCards[i].link;
    const text = element.querySelector('.element__title').textContent = initialCards[i].name;
    sectionElements.append(element)
  }
}

loadCards()



editButton.addEventListener("click", function (){
  openPopup(popupProfile);
  inputName.value = username.textContent;
  inputProfession.value = profession.textContent;
});

addButton.addEventListener("click", function (){
  openPopup(popupElement);
});

closeButtons.forEach(e=> e.addEventListener("click", function (e) {
  let close = e.target.closest('.popup')
  closePopup(close);
} ));

submitForm.addEventListener("submit", handleFormSubmit);
