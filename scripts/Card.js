function createItem(nameValue, linkValue, altValue) {
  const element = cardTemplate.querySelector(".element").cloneNode(true);
  const buttonDelete = element.querySelector(".element__recicle-bin");

  const buttonLike = element.querySelector(".element__like-button");

  buttonDelete.addEventListener("click", function (e) {
    e.target.closest(".element").remove();
  });
  picture.addEventListener("click", function (e) {
    openPopup(popupImage);
    picturePopupImage.src = linkValue;
    titlePopupImage.textContent = nameValue;
    picturePopupImage.alt = altValue;
  });
  buttonLike.addEventListener("click", function (e) {
    e.target.classList.toggle("element__like-button_state_active");
  });

  return element;
}

class Card {
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
    this._picture = element.querySelector(".element__image");
    this._title = element.querySelector(".element__title");
    this._title.textContent = this._name;
    this._picture.src = this._link;
    this._picture.alt = this._name;
    _setEventListener()

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
