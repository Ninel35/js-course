const registred = document.querySelector(".login-form");

registred.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const login = {
    email: form.elements.email.value,
    password: form.elements.password.value,
    // email: evt.currentTarget.elements.email.value,
    // password: evt.currentTarget.elements.password.value,
  };

  if (login === "") {
    alert("All form fields must be filled in");
    evt.currentTarget.reset();
    return;
  }

  console.log(login);
  evt.currentTarget.reset();
}
