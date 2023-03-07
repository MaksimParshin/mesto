export default class UserInfo {
  constructor({ profileUserName, profileAbout }) {
    this._userName = document.querySelector(profileUserName);
    this._profession = document.querySelector(profileAbout);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      profession: this._profession.textContent,
    };
  }

  setUserInfo({name, profession}) {
    this._userName.textContent = name;
    this._profession.textContent = profession;
  }
}
