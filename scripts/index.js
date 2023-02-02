const username = document.querySelector(".profile__name");
const profession = document.querySelector(".profile__profession");
const editButton = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__close-button");
const inputName = document.querySelector(".popup__input_value_username");
const inputProfession = document.querySelector(
  ".popup__input_value_profession"
);
const addButton = document.querySelector(".profile__add-button");

// получение формы
const submitFormProfile = document.querySelector(".popup__form_name_profile");
const submitFormItem = document.querySelector(".popup__form_name_element");

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

const elementTemplate = document.querySelector(".element-template").content;
const sectionElements = document.querySelector(".elements__list");
const popups = document.querySelectorAll(".popup");

// открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opend");
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opend");
}

// редактирование профиля
function editProfile(e) {
  e.preventDefault();
  username.textContent = inputName.value;
  profession.textContent = inputProfession.value;
  closePopup(popupProfile);
}

// создание карточки
function createItem(nameValue, linkValue, altValue) {
  const elementTemplate = document.querySelector(".element-template").content;
  const element = elementTemplate.querySelector(".element").cloneNode(true);
  const deleteButton = element.querySelector(".element__recicle-bin");
  const picture = element.querySelector(".element__image");
  const title = element.querySelector(".element__title");
  const likeButton = element.querySelector(".element__like-button");
  title.textContent = nameValue;
  picture.src = linkValue;
  picture.alt = altValue;
  deleteButton.addEventListener("click", function (e) {
    e.target.closest(".element").remove();
  });
  picture.addEventListener("click", function (e) {
    openPopup(popupImage);
    picturePopupImage.src = linkValue;
    titlePopupImage.textContent = nameValue;
    picturePopupImage.alt = altValue;
  });
  likeButton.addEventListener("click", function (e) {
    e.target.classList.toggle("element__like-button_state_active");
  });

  return element;
}

// добавление карточки на страницу
function renderItem(nameValue, linkValue, altValue) {
  sectionElements.prepend(createItem(nameValue, linkValue, altValue));
}

// загрузка карточек из массива на страницу
initialCards.forEach((e) => renderItem(e.name, e.link, e.name));

function addItem(e) {
  e.preventDefault();
  renderItem(inputImgName.value, inputImgLink.value, inputImgName.value);
  closePopup(popupNetItem);
  submitFormItem.reset();
}

function validForm(popupElemnet, obj) {
  const formElement = popupElemnet.querySelector(obj.formSelector);
  console.log(formElement.checkValidity())
  const inputList = Array.from(
    formElement.querySelectorAll(obj.inputSelector)
  );

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, obj);
  });

  const buttonElement = popupElemnet.querySelector(obj.submitButtonSelector);
  if (popupElemnet === popupProfile) {
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.removeAttribute("disabled", "");
  } else {
    buttonElement.classList.add(obj.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "");
  }
}

editButton.addEventListener("click", function () {
  validForm(popupProfile, objValidate);
  openPopup(popupProfile);
  inputName.value = username.textContent;
  inputProfession.value = profession.textContent;
});

addButton.addEventListener("click", function () {
  validForm(popupNetItem, objValidate);
  // submitFormItem.reset();
  openPopup(popupNetItem);
});

// закрытие попапа по нажатию на крестик
closeButtons.forEach((e) =>
  e.addEventListener("click", function (e) {
    closePopup(e.target.closest(".popup"));
  })
);

// закрытие попапа по нажатию на оверлэй
popups.forEach((e) =>
  e.addEventListener("click", function (e) {
    closePopup(e.target);
  })
);

// закрытие попапа по нажатию на escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    popups.forEach((popup) => {
      closePopup(popup);
    });
  }
});

submitFormProfile.addEventListener("submit", editProfile);
submitFormItem.addEventListener("submit", addItem);
