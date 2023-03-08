import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(this._popupForm.querySelectorAll(".popup__input"));
  }

  _getInputValues() {

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
