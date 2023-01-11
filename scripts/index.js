const username = document.querySelector(".profile__name");
const profession = document.querySelector(".profile__profession");
const editButton = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__close-button");
const inputName = document.querySelector(".popup__input_value_username");
const inputProfession = document.querySelector(
  ".popup__input_value_profession"
);
const addButton = document.querySelector(".profile__add-button");

const submitFormProfile = document.querySelector(".popup__form_name_profile");
const submitFormCard = document.querySelector(".popup__form_name_element");
const popup = document.querySelector(".popup");
// получение попапов
const popupProfile = document.querySelector(".popup_name_profile");
// попап карточки
const popupElement = document.querySelector(".popup_name_element");
// попап картинки
const popupImage = document.querySelector(".popup_name_img");
const picturePopupImage = popupImage.querySelector(".popup__img");
const titlePopupImage = popupImage.querySelector(".popup__img-title");
// данные с формы создания карточки
const inputImgName = document.querySelector(".popup__input_value_place");
const inputImgLink = document.querySelector(".popup__input_value_url");
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


function addProfile(e) {
  e.preventDefault();
  username.textContent = inputName.value;
  profession.textContent = inputProfession.value;
  closePopup(popupProfile);
}


function createItem(nameValue, linkValue) {
  const elementTemplate = document.querySelector(".element-template").content;
  const element = elementTemplate.querySelector(".element").cloneNode(true);
  const deleteButton = element.querySelector(".element__recicle-bin");
  const picture = element.querySelector(".element__image");
  const title = element.querySelector(".element__title");
  const likeButton = element.querySelector(".element__like-button");
  title.textContent = nameValue;
  picture.src = linkValue;
  deleteButton.addEventListener("click", function (e) {
    e.target.closest(".element").remove();
  });
  picture.addEventListener('click', function(e) {
    openPopup(popupImage);
    picturePopupImage.src = e.target.src;
    titlePopupImage.textContent = e.target.closest(".element").textContent;
  })
  likeButton.addEventListener('click', function(e) {
    e.target.classList.toggle("element__like-button_state_active");
  })
  sectionElements.append(element);
}

initialCards.forEach(e=> createItem(e.name, e.link));


function addItem(e) {
  e.preventDefault();
  createItem(inputImgName.value, inputImgLink.value);
  closePopup(popupElement)
  inputImgName.value = '';
  inputImgLink.value = '';
}


editButton.addEventListener("click", function () {
  openPopup(popupProfile);
  inputName.value = username.textContent;
  inputProfession.value = profession.textContent;
});

addButton.addEventListener("click", function () {
  openPopup(popupElement);
});

closeButtons.forEach((e) =>
  e.addEventListener("click", function (e) {
    closePopup(e.target.closest(".popup"));
  })
);


submitFormProfile.addEventListener("submit", addProfile);
submitFormCard.addEventListener("submit", addItem);
