function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const  startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector("button[data-stop]")
const body = document.querySelector("body")


let onClickIntervalId
let isAvailable = false

function onClickStart() {
  if (isAvailable) {return}
  isAvailable = true
 onClickIntervalId = setInterval(()=>body.style.backgroundColor =  getRandomHexColor(), 1000)
    
}

function onClickStop() {
  if (!isAvailable) {return}
  isAvailable = false
  clearInterval(onClickIntervalId)
}

startBtn.addEventListener("click", onClickStart)
stopBtn.addEventListener("click", onClickStop)