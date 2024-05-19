const div = document.querySelector("#boxes");
const elemInput = document.querySelector("input");
console.log(elemInput);
const btnOne = document.querySelector("[data-create]");
console.log(btnOne);
const btnTwo = document.querySelector("[data-destroy]");
console.log(btnTwo);

btnOne.addEventListener("click", handleCreate);
btnTwo.addEventListener("click", handleDestroy);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let markup = ``;
  let size = 30;
  for (let i = 0; i < amount; i++) {
    markup += `<div style='background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;'></div>`;
    size += 10;
  }
  return markup;
}

function handleCreate() {
  if (elemInput.value <= 100 && elemInput.value >= 1) {
    div.innerHTML = createBoxes(elemInput.value);
    console.log(createBoxes(elemInput.value));
  }
  elemInput.value = "";
}
function handleDestroy() {
  div.innerHTML = "";
}
