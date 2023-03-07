export default class UserInfo {
  constructor({ profileUserName, profileAbout }) {
    this._userName = document.querySelector(profileUserName);
    this._profession = document.querySelector(profileAbout);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      profession: this._profession.textContent,
    };
  }

  setUserInfo({userName, about}) {
    this._userName.textContent = userName;
    this._profession.textContent = about;
  }
}
