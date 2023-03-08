import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { initialCards, objValidate } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";


const buttonEdit = document.querySelector(".profile__edit-button");

const inputName = document.querySelector(".popup__input_value_username");
const inputProfession = document.querySelector(
  ".popup__input_value_profession"
);
const buttonAdd = document.querySelector(".profile__add-button");

// получение формы
const formProfile = document.querySelector(".popup__form_name_profile");
const formCard = document.querySelector(".popup__form_name_element");



const validationProfile = new FormValidator(objValidate, formProfile);
validationProfile.enableValidate();
validationProfile.resetValidation();

const validationCard = new FormValidator(objValidate, formCard);
validationCard.enableValidate();
validationCard.resetValidation();

const userInfo = new UserInfo({
  profileUserName: ".profile__name",
  profileAbout: ".profile__profession",
});


const popupClassCard = new PopupWithForm({
  selectorPopup: ".popup_name_element",
  handleFormSubmit: ({place, link}) => {
    const card = creatCard({
      name: place,
      link: link,
      templateSelector: ".element-template",
      handleCardClick: (name, link) => {
        popupWithIMG.open(name, link);
      },
    });
    cardsContainer.addItem(card);
  }
});

const popupClassProfil = new PopupWithForm({
  selectorPopup: ".popup_name_profile",
  handleFormSubmit: ({ name, profession }) => {
    userInfo.setUserInfo({ name, profession });
  },
});

const popupWithIMG = new PopupWithImage(".popup_name_img");

function creatCard(obj) {
  const card = new Card(obj);
  const cardElement = card.generateCard();
  return cardElement;
}


// инициация экземпляра класса секции для отоброжения карточек
const cardsContainer = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = creatCard({
        name: item.name,
        link: item.link,
        templateSelector: ".element-template",
        handleCardClick: (name, link) => {
          popupWithIMG.open(name, link);
        },
      });
      cardsContainer.addItem(card);
    },
  },
  ".elements__list"
);

// отображение карточки в ДОМ
cardsContainer.renderItem();


// открфтие редактирования профиля
buttonEdit.addEventListener("click", function () {
  popupClassProfil.open();
  inputName.value = userInfo.getUserInfo()["name"];
  inputProfession.value = userInfo.getUserInfo()["profession"];
  validationProfile.resetValidation();
});

// открытие добавления карточки
buttonAdd.addEventListener("click", function () {
  validationCard.resetValidation();
  popupClassCard.open();


});




popupWithIMG.setEventListeners();
popupClassProfil.setEventListeners();
popupClassCard.setEventListeners();
