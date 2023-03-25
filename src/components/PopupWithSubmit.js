import Popup from "./Popup";


export default class PopupWithSubmit extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
  }
open(newCard, id) {
  super.open();
  this._id = id;
  this._card = newCard;
}


setEventListeners() {
  super.setEventListeners();
  this._buttonSubmit.addEventListener('click', ()=> {
    this._handleFormSubmit(this._card, this._id);
  })
}

}
