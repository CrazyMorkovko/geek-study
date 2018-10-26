"use strict";

const form = document.getElementById('form');

/**
 * Функция валидирует форму и выводит ошибку в случае ввода неверных данных.
 *
 * @param {Event} event
 */
form.addEventListener('submit', (event) => {
  const name = document.getElementsByName('name')[0];
  const phone = document.getElementsByName('phone')[0];
  const password = document.getElementsByName('password')[0];
  const passwordConfirmation = document.getElementsByName('password_confirmation')[0];

  const nameError = document.getElementsByClassName('errorName')[0];
  const phoneError = document.getElementsByClassName('errorPhone')[0];
  const passwordError = document.getElementsByClassName('errorPassword')[0];
  const passwordConfirmationError = document.getElementsByClassName('errorPasswordConfirmation')[0];

  nameError.innerHTML = '';
  phoneError.innerHTML = '';
  passwordError.innerHTML = '';
  passwordConfirmationError.innerHTML = '';

  name.classList.remove('errorValue');
  phone.classList.remove('errorValue');
  password.classList.remove('errorValue');
  passwordConfirmation.classList.remove('errorValue');

  console.log(name);

  if (name.value.length < 1 || name.value.length > 50) {
    nameError.innerHTML = 'Имя должно быть в пределах от 1 до 50 символов.';
    name.classList.add('errorValue');
    event.preventDefault();
  }

  if (!(phone.value.length === 11 && /^[0-9]+$/.test(phone.value))) {
    phoneError.innerHTML = 'Номер телефона должен содержать 11 цифр.';
    phone.classList.add('errorValue');
    event.preventDefault();
  }

  if (password.value.length < 5 || password.value.length > 50) {
    passwordError.innerHTML = 'Пароль должен быть длиной от 5 до 50 символов.';
    password.classList.add('errorValue');
    event.preventDefault();
  }

  if (password.value.length < 5 || password.value.length > 50 || passwordConfirmation.value !== password.value) {
    passwordConfirmationError.innerHTML = 'Пароли должны совпадать';
    passwordConfirmation.classList.add('errorValue');
    event.preventDefault();
  }
});
