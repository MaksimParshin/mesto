
function showInputError(formElement, inputElement, errorMessage, obj) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(obj['inputErrorClass']);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj['errorClass']);
}

function hideInputError(formElement, inputElement, obj) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(obj['inputErrorClass']);
  errorElement.classList.remove(obj['errorClass']);
  errorElement.textContent = '';
}
