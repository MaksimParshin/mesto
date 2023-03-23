import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { initialCards, objValidate } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const buttonEdit = document.querySelector(".profile__edit-button");

const inputName = document.querySelector(".popup__input_value_username");
const inputProfession = document.querySelector(
  ".popup__input_value_profession"
);
const buttonAdd = document.querySelector(".profile__add-button");

const buttonAvatar = document.querySelector(".profile__avatar-button");
const inputAvatar = document.querySelector(".popup__input_value_avatar");
const profileAvatar = document.querySelector(".profile__avatar");

// получение формы
const formProfile = document.querySelector(".popup__form_name_profile");
const formCard = document.querySelector(".popup__form_name_element");
const formAvatar = document.querySelector(".popup__form_name_avatar");

const API = new Api({
  token: "206a79e8-9bf0-471f-b412-b2cba24c2ed9",
  userID: "cohort-62",
});

// API.getUserInfo().then((data) => console.log(data));

const validationAvatar = new FormValidator(objValidate, formAvatar);
validationAvatar.enableValidate();
validationAvatar.resetValidation();

const validationProfile = new FormValidator(objValidate, formProfile);
validationProfile.enableValidate();
validationProfile.resetValidation();

const validationCard = new FormValidator(objValidate, formCard);
validationCard.enableValidate();
validationCard.resetValidation();

const userInfo = new UserInfo({
  profileUserName: ".profile__name",
  profileAbout: ".profile__profession",
  profileAvatar: ".profile__avatar"
});

const popupClassCard = new PopupWithForm({
  selectorPopup: ".popup_name_element",
  handleFormSubmit: ({ place, link }) => {
    const card = creatCard({
      name: place,
      link: link,
      templateSelector: ".element-template",
      handleCardClick: (name, link) => {
        popupWithIMG.open(name, link);
      },
    });
    cardsContainer.addItem(card);
  },
});

const popupClassProfil = new PopupWithForm({
  selectorPopup: ".popup_name_profile",
  handleFormSubmit: (item) => {
    API.setUserInfo(item).then((data) => {
      userInfo.setUserInfo(data);
    });
  },
});


const popupClassAvatar = new PopupWithForm({
  selectorPopup: ".popup_name_avatar",
  handleFormSubmit: (item) => {
    API.setAvatar(item).then((data) => {
      userInfo.setUserInfo(data);
    });
  },
})

const popupWithIMG = new PopupWithImage(".popup_name_img");

function creatCard(obj) {
  const card = new Card(obj);
  const cardElement = card.generateCard();
  return cardElement;
}

// инициация экземпляра класса секции для отоброжения карточек
const cardsContainer = new Section(
  {
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
API.getInitialCards().then((data) => cardsContainer.renderItems(data));

function editAvatar() {
  popupClassAvatar.open();
  inputAvatar.value = userInfo.getUserInfo()["avatar"];
  validationAvatar.resetValidation()

}

function editProfile() {
  popupClassProfil.open();
  inputName.value = userInfo.getUserInfo()["name"];
  inputProfession.value = userInfo.getUserInfo()["about"];
  validationProfile.resetValidation();
}

function addCard() {
  validationCard.resetValidation();
  popupClassCard.open();
}

// открытие редактирования авататара
buttonAvatar.addEventListener('click', editAvatar)

// открфтие редактирования профиля
buttonEdit.addEventListener("click", editProfile);

// открытие добавления карточки
buttonAdd.addEventListener("click", addCard);



API.getUserInfo().then((data) => {
  userInfo.setUserInfo(data);
  profileAvatar.src = data.avatar;
});



// слушатели попапов
popupClassAvatar.setEventListeners();
popupWithIMG.setEventListeners();
popupClassProfil.setEventListeners();
popupClassCard.setEventListeners();
