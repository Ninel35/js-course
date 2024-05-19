const input = document.querySelector("#name-input");
const spantext = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  spantext.textContent = inputValue;
  if (inputValue === "") {
    spantext.textContent = "Anonymous";
  }
});
