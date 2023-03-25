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

let currentID = null;

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
  profileAvatar: ".profile__avatar",
});

// создание карточки
const popupClassCard = new PopupWithForm({
  selectorPopup: ".popup_name_element",
  handleFormSubmit: (data, currentID) => {
    API.createCard(data).then((data) => {
      cardsContainer.addItem(creatCard(data, currentID));
    });
  },
});

function creatCard(data, currentID) {
  const card = new Card({
    data: data,
    currentId: currentID,
    templateSelector: ".element-template",
    handleCardClick: (name, link) => {
      popupWithIMG.open(name, link);
    },
    handleDeleteLikeCard: () => {
      API.deleteLike(data._id).then((data) => {
        card.switchLike();
        card.showLikes(data.likes.length);
        card.deleteLikeCard();
      });
    },
    handleLikeCard: () => {
      API.putLike(data._id).then((data) => {
        card.switchLike();
        card.showLikes(data.likes.length);
        card.likeCard();
      });
    },
  });

  return card.generateCard();

}

// инициация экземпляра класса секции для отоброжения карточек
const cardsContainer = new Section(
  {
    renderer: (data, currentID) => {

      cardsContainer.addItem(creatCard(data, currentID));
    },
  },
  ".elements__list"
);


// отображение карточки в ДОМ

const popupClassProfil = new PopupWithForm({
  selectorPopup: ".popup_name_profile",
  handleFormSubmit: (item) => {
    popupClassProfil.renderLoading(true, "Сохранение...");
    API.setUserInfo(item)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupClassProfil.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupClassProfil.renderLoading(false);
      });
  },
});

const popupClassAvatar = new PopupWithForm({
  selectorPopup: ".popup_name_avatar",
  handleFormSubmit: (item) => {
    popupClassAvatar.renderLoading(true, "Сохранение...");
    API.setAvatar(item)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupClassAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupClassAvatar.renderLoading(false);
      });
  },
});

const popupWithIMG = new PopupWithImage(".popup_name_img");

function editAvatar() {
  popupClassAvatar.open();
  inputAvatar.value = userInfo.getUserInfo()["avatar"];
  validationAvatar.resetValidation();
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
buttonAvatar.addEventListener("click", editAvatar);

// открфтие редактирования профиля
buttonEdit.addEventListener("click", editProfile);

// открытие добавления карточки
buttonAdd.addEventListener("click", addCard);

// API.getUserInfo().then((data) => {
//   userInfo.setUserInfo(data);
//   profileAvatar.src = data.avatar;
//   currentID = data._id;
//   console.log(currentID);
// });

// API.getInitialCards()
//   .then((data) => cardsContainer.renderItems(data))
//   .catch((err) => {
//     console.log(err);
//   });

Promise.all([API.getUserInfo(), API.getInitialCards()]).then(
  ([resUser, resCard]) => {
    userInfo.setUserInfo(resUser);
    profileAvatar.src = resUser.avatar;
    currentID = resUser._id;
    cardsContainer.renderItems(resCard, currentID);
  }
);

// .catch((err) => {
//   console.log(err);
// });

// слушатели попапов
popupClassAvatar.setEventListeners();
popupWithIMG.setEventListeners();
popupClassProfil.setEventListeners();
popupClassCard.setEventListeners();
