export default class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._buttonSubmit = this._popup.querySelector(
      ".popup__submit-button_state_save"
    );
  }

  open() {
    this._popup.classList.add("popup_opend");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opend");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  renderLoading(isLoading, text) {
    if (!this._buttonSubmit) return;

    if (isLoading) {
      this._text = this._buttonSubmit.textContent;
      this._buttonSubmit.textContent = text;
    } else {
      this._buttonSubmit.textContent = this._text;
    }
  }


  setEventListeners() {
    this._popup
      .querySelector(".popup__close-button")
      .addEventListener("click", () => {
        this.close();
      });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opend")) {
        this.close();
      }
    });
  }
}
