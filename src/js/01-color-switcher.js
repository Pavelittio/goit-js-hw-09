let idInterval = null;
const refs = {
    body: document.querySelector(`body`),
    buttonStart: document.querySelector(`[data-start]`),
    buttonStop: document.querySelector(`[data-stop]`)
}

refs.buttonStop.setAttribute(`disabled`, `disabled`)
refs.buttonStart.addEventListener(`click`, setColor)
refs.buttonStop.addEventListener(`click`, stopChengeColor)


function setColor (){
    idInterval = setInterval(() => {refs.body.style.background=getRandomHexColor()},1000)
    refs.buttonStart.setAttribute(`disabled`, `disabled`)
    refs.buttonStop.removeAttribute(`disabled`, `disabled`)
}
function stopChengeColor (){
    clearInterval(idInterval);
    refs.buttonStop.setAttribute(`disabled`, `disabled`)
    refs.buttonStart.removeAttribute(`disabled`, `disabled`)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
