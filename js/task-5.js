const btnChange = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

btnChange.addEventListener("click", handleChange);
function handleChange(evt) {
  evt.preventDefault();
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
