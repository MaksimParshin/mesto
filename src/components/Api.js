export default class Api {
  constructor({ token, userID }) {
    this._token = token;
    this._userID = userID;
    // this._checkResponse = this._checkResponse.bind(this);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._userID}/cards`, {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._userID}/users/me`, {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  setUserInfo(item) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._userID}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        about: item.about,
      }),
    }).then(this._checkResponse);
  }

  setAvatar(item) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._userID}/users/me/avatar`,
      {
        method: "PATCH",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: item.avatar,
        }),
      }
    ).then(this._checkResponse);
  }
  createCard(data) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._userID}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._userID}/cards/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }

  putLike(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._userID}/cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }

  deleteLike(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._userID}/cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }
}
