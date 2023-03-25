export default class Card {
  constructor({ data, currentId, templateSelector, handleCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._cardUserId = data.owner._id;
    this._dataLikes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._currentId = currentId;
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
    this._likeButton = this._element.querySelector(".element__like-button");
    this._deletButton = this._element.querySelector(".element__recicle-bin");
    this._likeCounter = this._element.querySelector(".element__like-counter");
    this._title.textContent = this._name;
    this._picture.src = this._link;
    this._picture.alt = this._name;
    this._likeCounter.textContent = this._dataLikes.length;
    this._setEventListener();
    if (this._currentId === this._cardUserId) {
      this._deletButton.classList.add("element__recicle-bin_state_active");
    }
    return this._element;
  }

  _toggleLike() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_state_active");
  }

  _deleteCard() {
    this._element.remove();
  }

  _setEventListener() {
    this._deletButton.addEventListener("click", () => {
      this._deleteCard();
    });
    this._picture.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._likeButton.addEventListener("click", () => {
      this._toggleLike();
    });
  }
}


