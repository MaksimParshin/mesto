export default class Section {
  constructor({ data, renderer }, selector) {
    this._initialArray = data;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element)
  }
}
