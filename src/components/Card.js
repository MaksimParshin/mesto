export default class Card {
  constructor({ data, currentId, templateSelector, handleCardClick, handleDeleteLikeCard, handleLikeCard}) {
    this._card = data;
    this._name = data.name;
    this._link = data.link;
    this._cardUserId = data.owner._id;
    this._dataLikes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._currentId = currentId;
    this._handleDeleteLikeCard = handleDeleteLikeCard;
    this._handleLikeCard = handleLikeCard;
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
    this.showLikes(this._card.likes.length);
    this.switchLike();
    this._setEventListener();
    if (this._currentId === this._cardUserId) {
      this._deletButton.classList.add("element__recicle-bin_state_active");
    }
    return this._element;
  }

  // _toggleLike() {
  //   this._element
  //     .querySelector(".element__like-button")
  //     .classList.toggle("element__like-button_state_active");
  // }

  likeCard() {
    this._element
      .querySelector(".element__like-button")
      .classList.add("element__like-button_state_active");
  }

  deleteLikeCard() {
    this._element
    .querySelector(".element__like-button")
    .classList.remove("element__like-button_state_active");
  }

  _deleteCard() {
    this._element.remove();
  }

  showLikes(likes) {
    this._likeCounter.textContent = likes;
  }

  switchLike() {
    return Array.from(this._card.likes).forEach((likeInfo)=>{
      likeInfo._id === this._currentId ? this.likeCard() : this.deleteLikeCard();

    })
  }

  _setEventListener() {
    this._deletButton.addEventListener("click", () => {
      this._deleteCard();
    });
    this._picture.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._likeButton.addEventListener("click", () => {
      // this._toggleLike();

      if(!this._likeButton.classList.contains("element__like-button_state_active")) {
        this._handleLikeCard();
      } else {
        this._handleDeleteLikeCard();
      }
    });
  }
}
