import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const spanDays  = document.querySelector('.value[data-days]')
const spanHours  = document.querySelector('.value[data-hours]')
const spanMin  = document.querySelector('.value[data-minutes]')
const spanSec = document.querySelector('.value[data-seconds]')
const myInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start")

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
   return value.toString().padStart(2, `0`)
}

let isstartBtnDisabled = true
const fp = flatpickr(myInput, {enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      startBtn.addEventListener("click", onStart)
      const inputDate = (new Date(selectedDates.toString())).getTime()
      let ms = inputDate - Date.now()
      if (ms<=0) {
             Notiflix.Notify.failure('Please choose a date in the future');
              return
      } else {
          isstartBtnDisabled = false
      }
       
      function onStart() {
            if (isstartBtnDisabled) {return}
            const interId = setInterval(() => {
                if (ms < 1000) {
                    clearInterval(interId)
                    return
                }  
                 
          ms = inputDate - Date.now()
          const dateObj = convertMs(ms)
          spanDays.textContent = addLeadingZero(dateObj.days)
          spanHours.textContent = addLeadingZero(dateObj.hours)
          spanMin.textContent = addLeadingZero(dateObj.minutes)
          spanSec.textContent = addLeadingZero(dateObj.seconds)
          console.log(inputDate - Date.now());         
      }, 1000)}
  }});


  
