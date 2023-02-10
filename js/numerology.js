let inputDate = document.getElementById("userDate");
let inputMonth = document.getElementById("userMonth");
let inputYear = document.getElementById("userYear");

let render = document.getElementById("render");
let renderItem = null;

function handleSubmit(event) {
  event.preventDefault();
  let userDate = inputDate.value;
  let userMonth = inputMonth.value;
  let userYear = inputYear.value;

  let chuoi = userDate + userMonth + userYear;

  let stringArray = chuoi.split("");
  let sum = 0;
  for (let i = 0; i < stringArray.length; i++) {
    sum += parseInt(stringArray[i]);
  }
  if (sum == 11) {
    sum = 11;
  } else if (sum == 22) {
    sum = 22;
  } else if (sum == 33) {
    sum = 33;
  } else {
    let tempDonvi = sum % 10;
    let temChuc = parseInt(sum / 10);
    sum = tempDonvi + temChuc;
  }
  if (renderItem) {
    renderItem.classList.remove("display-item");
  }
  renderItem = document.getElementById(`number${sum}`);
  renderItem.classList.add("display-item");
  render.innerHTML = `Your date is ${userDate} your month is ${userMonth} your year is ${userYear}`;
}
