// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputField = document.querySelector('input');
const radioBtnSuccess = document.querySelector('input[value="fulfilled"]');

const onButtonSubmit = event => {
  event.preventDefault();

  const delay = Number(inputField.value);
  const isFulfilled = radioBtnSuccess.checked;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilled) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59a10d',
        titleColor: 'white',
        titleSize: '16',
        messageColor: 'white',
        messageSize: '16',
        theme: 'dark',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Fail',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: 'white',
        titleSize: '16',
        messageColor: 'white',
        messageSize: '16',
        theme: 'dark',
      });
    });
};

form.addEventListener('submit', onButtonSubmit);
