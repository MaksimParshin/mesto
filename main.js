(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var n,r;return n=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_addDisablButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_removeDisablButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._addDisablButton():this._removeDisablButton()}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidate",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t){var n=t.data,r=t.currentID,o=t.templateSelector,i=t.handleCardClick,u=t.handleDeleteLikeCard,a=t.handleLikeCard,c=t.handleDeleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=n,this._name=n.name,this._link=n.link,this._cardUserId=n.owner._id,this._dataLikes=n.likes,this.idCard=n._id,this._templateSelector=o,this._handleCardClick=i,this._currentID=r(),this._handleDeleteLikeCard=u,this._handleLikeCard=a,this._handleDeleteCard=c}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._picture=this._element.querySelector(".element__image"),this._title=this._element.querySelector(".element__title"),this._likeButton=this._element.querySelector(".element__like-button"),this._deletButton=this._element.querySelector(".element__recicle-bin"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._title.textContent=this._name,this._picture.src=this._link,this._picture.alt=this._name,this.showLikes(this._card.likes.length),this.switchLike(),this._setEventListener(),this._currentID===this._cardUserId&&this._deletButton.classList.add("element__recicle-bin_state_active"),this._element}},{key:"likeCard",value:function(){this._likeButton.classList.add("element__like-button_state_active")}},{key:"deleteLikeCard",value:function(){this._likeButton.classList.remove("element__like-button_state_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"showLikes",value:function(e){this._likeCounter.textContent=e}},{key:"switchLike",value:function(){var e=this;return Array.from(this._card.likes).forEach((function(t){t._id===e._currentID?e.likeCard():e.deleteLikeCard()}))}},{key:"_setEventListener",value:function(){var e=this;this._deletButton.addEventListener("click",(function(){e._handleDeleteCard(e)})),this._picture.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("element__like-button_state_active")?e._handleDeleteLikeCard(e.idCard,e._card):e._handleLikeCard(e)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var l=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._buttonSubmit=this._popup.querySelector(".popup__submit-button_state_save")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opend"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opend"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"renderLoading",value:function(e,t){this._buttonSubmit&&(e?(this._text=this._buttonSubmit.textContent,this._buttonSubmit.textContent=t):this._buttonSubmit.textContent=this._text)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opend")&&e.close()}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._picturePopupImage=t._popup.querySelector(".popup__img"),t._titlePopupImage=t._popup.querySelector(".popup__img-title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._titlePopupImage.textContent=e,this._picturePopupImage.src=t,this._picturePopupImage.alt=e,d(_(u.prototype),"open",this).call(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.selectorPopup,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popup.querySelector(".popup__form"),t._inputList=Array.from(t._popupForm.querySelectorAll(".popup__input")),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;g(w(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){g(w(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var P=function(){function e(t){var n=t.profileUserName,r=t.profileAbout,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._profession=document.querySelector(r),this._avatar=document.querySelector(o),this.getCurrentID=this.getCurrentID.bind(this)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._profession.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._profession.textContent=e.about,this._avatar.src=e.avatar}},{key:"setCurrentID",value:function(e){this._currentID=e}},{key:"getCurrentID",value:function(){return this._currentID}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var I=function(){function e(t){var n=t.headers,r=t.baseURL;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=n,this._baseURL=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseURL,"cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseURL,"users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseURL,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseURL,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"createCard",value:function(e){return fetch("".concat(this._baseURL,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseURL,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseURL,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseURL,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.selectorPopup,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t}return t=u,(n=[{key:"open",value:function(e,t){T(B(u.prototype),"open",this).call(this),this._id=t,this._card=e}},{key:"setEventListeners",value:function(){var e=this;T(B(u.prototype),"setEventListeners",this).call(this),this._buttonSubmit.addEventListener("click",(function(){e._handleFormSubmit(e._card,e._id)}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=document.querySelector(".profile__edit-button"),V=document.querySelector(".popup__input_value_username"),F=document.querySelector(".popup__input_value_profession"),N=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__avatar-button"),H=document.querySelector(".popup__input_value_avatar"),M=document.querySelector(".profile__avatar"),z=document.querySelector(".popup__form_name_profile"),$=document.querySelector(".popup__form_name_element"),G=document.querySelector(".popup__form_name_avatar"),K=new I({headers:{authorization:"206a79e8-9bf0-471f-b412-b2cba24c2ed9","Content-Type":"application/json"},baseURL:"https://mesto.nomoreparties.co/v1/cohort-62/"}),Q=new n(u,G);Q.enableValidate(),Q.resetValidation();var W=new n(u,z);W.enableValidate(),W.resetValidation();var X=new n(u,$);X.enableValidate(),X.resetValidation();var Y=new P({profileUserName:".profile__name",profileAbout:".profile__profession",profileAvatar:".profile__avatar"});function Z(e){var t=new i({data:e,currentID:Y.getCurrentID,templateSelector:".element-template",handleCardClick:function(e,t){oe.open(e,t)},handleDeleteLikeCard:function(){K.deleteLike(e._id).then((function(e){t.switchLike(),t.showLikes(e.likes.length),t.deleteLikeCard()})).catch((function(e){return console.log(e)}))},handleLikeCard:function(){K.putLike(e._id).then((function(e){t.switchLike(),t.showLikes(e.likes.length),t.likeCard()})).catch((function(e){return console.log(e)}))},handleDeleteCard:function(){ie.open(t,e._id)}});return t.generateCard()}var ee=new l({renderer:function(e){ee.addItem(Z(e))}},".elements__list"),te=new E({selectorPopup:".popup_name_profile",handleFormSubmit:function(e){te.renderLoading(!0,"Сохранение..."),K.setUserInfo(e).then((function(e){Y.setUserInfo(e),te.close()})).catch((function(e){return console.log(e)})).finally((function(){te.renderLoading(!1)}))}}),ne=new E({selectorPopup:".popup_name_avatar",handleFormSubmit:function(e){ne.renderLoading(!0,"Сохранение..."),K.setAvatar(e).then((function(e){Y.setUserInfo(e),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){ne.renderLoading(!1)}))}}),re=new E({selectorPopup:".popup_name_element",handleFormSubmit:function(e){re.renderLoading(!0,"Создание..."),K.createCard(e).then((function(e){ee.addItem(Z(e)),re.close()})).catch((function(e){return console.log(e)})).finally((function(){re.renderLoading(!1)}))}}),oe=new b(".popup_name_img"),ie=new U({selectorPopup:".popup_name_card-delet",handleFormSubmit:function(e,t){ie.renderLoading(!0,"Удаление..."),K.deleteCard(t).then((function(){e.deleteCard(),ie.close()})).catch((function(e){return console.log(e)})).finally((function(){ie.renderLoading(!1)}))}});J.addEventListener("click",(function(){ne.open(),H.value=Y.getUserInfo().avatar,Q.resetValidation()})),A.addEventListener("click",(function(){te.open(),V.value=Y.getUserInfo().name,F.value=Y.getUserInfo().about,W.resetValidation()})),N.addEventListener("click",(function(){X.resetValidation(),re.open()})),Promise.all([K.getUserInfo(),K.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(o),Y.setCurrentID(o._id),M.src=o.avatar,ee.renderItems(i)})).catch((function(e){return console.log(e)})),ne.setEventListeners(),te.setEventListeners(),re.setEventListeners(),oe.setEventListeners(),ie.setEventListeners()})();