const { throttle } = require('lodash');

const inputs = document.querySelector('.feedback-form').elements;
const email = document.querySelector('input[type="email"]');
const massage = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

let savedObjfromLocalStore =
  localStorage.getItem('feedback-form-state') || '{"email":"", "massage":""}';
// let savedObjfromLocalStore = localStorage.getItem('feedback-form-state');
const isJson = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
// if (isJson(savedObjfromLocalStore) {
//   savedObjfromLocalStore = JSON.parse(savedObjfromLocalStore);
//   console.log(savedObjfromLocalStore.email);
//   email.value = savedObjfromLocalStore.email;
//   massage.value = savedObjfromLocalStore.massage;
// }

form.addEventListener(
  'input',
  throttle(e => {
    const values = {
      email: email.value,
      massage: massage.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(values));
  }, 1000),
);
// console.log(savedObjfromLocalStore);
const sendForm = function (e) {
  e.preventDefault();
  console.log({
    email: email.value,
    massage: massage.value,
  });
  form.reset();
  localStorage.clear();
};
form.addEventListener('submit', sendForm);
