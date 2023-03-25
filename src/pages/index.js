import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { objValidate } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithSubmit from "../components/popupWithSubmit.js";

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

function creatCard(data) {
  const card = new Card({
    data: data,
    currentID: userInfo.getCurrentID,
    templateSelector: ".element-template",
    handleCardClick: (name, link) => {
      popupWithIMG.open(name, link);
    },
    handleDeleteLikeCard: () => {
      API.deleteLike(data._id)
        .then((data) => {
          card.switchLike();
          card.showLikes(data.likes.length);
          card.deleteLikeCard();
        })
        .catch((err) => console.log(err));
    },
    handleLikeCard: () => {
      API.putLike(data._id)
        .then((data) => {
          card.switchLike();
          card.showLikes(data.likes.length);
          card.likeCard();
        })
        .catch((err) => console.log(err));
    },
    handleDeleteCard: () => {
      popupWithDelete.open(card, data._id);
    },
  });

  return card.generateCard();
}

// инициация экземпляра класса секции для отоброжения карточек
const cardsContainer = new Section(
  {
    renderer: (data) => {
      cardsContainer.addItem(creatCard(data));
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

// создание карточки
const popupClassCard = new PopupWithForm({
  selectorPopup: ".popup_name_element",
  handleFormSubmit: (data) => {
    popupClassCard.renderLoading(true, "Создание...");
    API.createCard(data)
      .then((data) => {
        cardsContainer.addItem(creatCard(data));
        popupClassCard.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupClassCard.renderLoading(false);
      });
  },
});

const popupWithIMG = new PopupWithImage(".popup_name_img");

const popupWithDelete = new PopupWithSubmit({
  selectorPopup: ".popup_name_card-delet",
  handleFormSubmit: (newCard, id) => {
    popupWithDelete.renderLoading(true, "Удаление...");
    API.deleteCard(id)
      .then(() => {
        newCard.deleteCard();

        popupWithDelete.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupWithDelete.renderLoading(false);
      });
  },
});

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

Promise.all([API.getUserInfo(), API.getInitialCards()]).then(
  ([resUser, resCard]) => {
    userInfo.setUserInfo(resUser);
    userInfo.setCurrentID(resUser._id);
    profileAvatar.src = resUser.avatar;

    cardsContainer.renderItems(resCard);
  }
);

// слушатели попапов
popupClassAvatar.setEventListeners();
popupClassProfil.setEventListeners();
popupClassCard.setEventListeners();
popupWithIMG.setEventListeners();
popupWithDelete.setEventListeners();
