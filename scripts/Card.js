function createItem(nameValue, linkValue, altValue) {
  const element = cardTemplate.querySelector(".element").cloneNode(true);
  const buttonDelete = element.querySelector(".element__recicle-bin");
  const picture = element.querySelector(".element__image");
  const title = element.querySelector(".element__title");
  const buttonLike = element.querySelector(".element__like-button");
  title.textContent = nameValue;
  picture.src = linkValue;
  picture.alt = altValue;
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
}
