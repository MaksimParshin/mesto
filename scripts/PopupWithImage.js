import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._picturePopupImage = this._popup.querySelector(".popup_name_img");
    this._titlePopupImage = this._popup.querySelector(".popup__img-title");
  }

  open(name, link) {
    this._titlePopupImage.textContent = name;
    this._picturePopupImage.src = link;
    this._picturePopupImage.alt = name;

    super.open();
  }
}
