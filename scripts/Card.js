import {picturePopupImage, titlePopupImage} from './index.js';
export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._picture = this._element.querySelector(".element__image");
    this._title = this._element.querySelector(".element__title");
    this._title.textContent = this._name;
    this._picture.src = this._link;
    this._picture.alt = this._name;
    this._setEventListener()

    return this._element
  }


  _toggleLike() {
    this._element
    .querySelector(".element__like-button")
    .classList.toggle("element__like-button_state_active");
  }

  _deleteCard() {
    this._element
      .querySelector(".element__recicle-bin")
      .closest(".element")
      .remove();
  }

  _toggleLike() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_state_active");
  }

 _openPopupPicture() {
  openPopup(popupImage);
  picturePopupImage.src = this._link;
  titlePopupImage.textContent = this._name;
  picturePopupImage.alt = this._name;

 }

 _setEventListener() {
  this._element
      .querySelector(".element__recicle-bin")
      .addEventListener("click", () => {
        this._deleteCard();
      });
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._openPopupPicture();
      });
    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._toggleLike();
      });
 }
}
