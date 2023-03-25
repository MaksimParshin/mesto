export default class UserInfo {
  constructor({ profileUserName, profileAbout, profileAvatar }) {
    this._userName = document.querySelector(profileUserName);
    this._profession = document.querySelector(profileAbout);
    this._avatar = document.querySelector(profileAvatar);
    this.getCurrentID = this.getCurrentID.bind(this);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._profession.textContent,
      avatar: this._avatar.src
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._profession.textContent = data.about;
    this._avatar.src = data.avatar;
  }

  setCurrentID(id) {
    this._currentID = id;
  }

  getCurrentID() {
    return this._currentID;
  }
}
