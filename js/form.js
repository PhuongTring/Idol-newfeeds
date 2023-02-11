let inputName = document.getElementById("userName");
let inputAge = document.getElementById("userAge");
let render = document.getElementById("render");
let formHomepage = document.getElementById("frm-homepage");
formHomepage.onsubmit = handleSubmit;

function handleSubmit(event) {
  let userName = inputName.value;
  let userAge = inputAge.value;
  event.preventDefault();
  render.innerHTML = `Hi ${userName} your age is ${userAge}`;
}
