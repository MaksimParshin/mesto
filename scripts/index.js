const username = document.querySelector(".profile__name");
const profession = document.querySelector(".profile__profession");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonsClose = document.querySelectorAll(".popup__close-button");
const inputName = document.querySelector(".popup__input_value_username");
const inputProfession = document.querySelector(
  ".popup__input_value_profession"
);
const buttonAdd = document.querySelector(".profile__add-button");

// получение формы
const formProfile = document.querySelector(".popup__form_name_profile");
const formCard = document.querySelector(".popup__form_name_element");

// попап профиля
const popupProfile = document.querySelector(".popup_name_profile");
// попап карточки
const popupNetItem = document.querySelector(".popup_name_element");
// попап картинки
const popupImage = document.querySelector(".popup_name_img");
const picturePopupImage = popupImage.querySelector(".popup__img");
const titlePopupImage = popupImage.querySelector(".popup__img-title");
// данные с формы создания карточки
const inputImgName = document.querySelector(".popup__input_value_place");
const inputImgLink = document.querySelector(".popup__input_value_url");
const cardTemplate = document.querySelector(".element-template").content;
const cardsContainer = document.querySelector(".elements__list");
const popups = document.querySelectorAll(".popup");

// открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opend");
  document.addEventListener("keydown", closeKeydownPopup);
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opend");
  document.removeEventListener("keydown", closeKeydownPopup);
}

// редактирование профиля
function editProfile(e) {
  e.preventDefault();
  username.textContent = inputName.value;
  profession.textContent = inputProfession.value;
  closePopup(popupProfile);
}

// создание карточки



// добавление карточки на страницу
function renderItem(nameValue, linkValue, altValue) {
  cardsContainer.prepend(createItem(nameValue, linkValue, altValue));
}

// загрузка карточек из массива на страницу
initialCards.forEach((e) => renderItem(e.name, e.link, e.name));

function addItem(e) {
  e.preventDefault();
  renderItem(inputImgName.value, inputImgLink.value, inputImgName.value);
  closePopup(popupNetItem);
  // formCard.reset();
}

buttonEdit.addEventListener("click", function () {
  openPopup(popupProfile);
  inputName.value = username.textContent;
  inputProfession.value = profession.textContent;
  resetValidation(formProfile, objValidate)
});

buttonAdd.addEventListener("click", function () {
  resetValidation(formCard, objValidate)
  formCard.reset();
  openPopup(popupNetItem);
});

// закрытие попапа по нажатию на крестик
buttonsClose.forEach((e) =>
  e.addEventListener("click", function (e) {
    closePopup(e.target.closest(".popup"));
  })
);

// закрытие попапа по нажатию на оверлэй
popups.forEach((e) =>
  e.addEventListener("click", function (e) {
    if (e.target.classList.contains("popup_opend")) {
      closePopup(e.target);

    }
  })
);

// функция закрытия попапа по нажатию на эскейп
function closeKeydownPopup(evt) {

  if (evt.key === "Escape") {
    const popupOpend = document.querySelector(".popup_opend");
    closePopup(popupOpend);
  }
}


formProfile.addEventListener("submit", editProfile);
formCard.addEventListener("submit", addItem);
