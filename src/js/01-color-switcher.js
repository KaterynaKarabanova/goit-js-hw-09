function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const  startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector("button[data-stop]")
const body = document.querySelector("body")


let onClickIntervalId

stopBtn.setAttribute("disabled", "")


function onClickStart() {
  startBtn.setAttribute("disabled", "")
  stopBtn.removeAttribute("disabled")
 onClickIntervalId = setInterval(()=>body.style.backgroundColor =  getRandomHexColor(), 1000)
    
}

function onClickStop() {
  stopBtn.setAttribute("disabled", "")
  startBtn.removeAttribute("disabled")
  clearInterval(onClickIntervalId)
}

startBtn.addEventListener("click", onClickStart)
stopBtn.addEventListener("click", onClickStop)