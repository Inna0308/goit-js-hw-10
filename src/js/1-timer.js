// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('button[data-start]');
const inputField = document.querySelector('#datetime-picker');
const daySpan = document.querySelector('span[data-days]');
const hourSpan = document.querySelector('span[data-hours]');
const minuteSpan = document.querySelector('span[data-minutes]');
const secondSpan = document.querySelector('span[data-seconds]');

let userSelectedDate;

import icon from '../img/icon.svg';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= Date.now()) {
      iziToast.show({
        iconUrl: `${icon}#icon-cross`,
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        titleColor: 'white',
        titleSize: '16',
        messageColor: 'white',
        messageSize: '16',
        backgroundColor: '#ef4040',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const startTimer = () => {
  startBtn.disabled = true;
  inputField.disabled = true;

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const remainingTime = userSelectedDate - currentTime;

    if (remainingTime <= 0) {
      clearInterval(intervalId);

      daysSpan.textContent = '00';
      hoursSpan.textContent = '00';
      minutesSpan.textContent = '00';
      secondsSpan.textContent = '00';

      inputField.disabled = false;
      startBtn.disabled = false;
      return;
    }
    const time = convertMs(remainingTime);
    console.log(remainingTime);
    console.log(time);
    updateTimerDisplay(time);
  }, 1000);
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  daySpan.textContent = addLeadingZero(days);
  hourSpan.textContent = addLeadingZero(hours);
  minuteSpan.textContent = addLeadingZero(minutes);
  secondSpan.textContent = addLeadingZero(seconds);
}

startBtn.addEventListener('click', startTimer);
