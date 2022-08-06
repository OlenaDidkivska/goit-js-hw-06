function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", getAmount);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function getAmount(event) {
  let amount = +refs.input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  if (amount >= Number(refs.input.min) && amount <= Number(refs.input.max)) {
    for (let i = 0; i < amount; i += 1) {
      const color = getRandomHexColor();
      const width = 30 + i * 10;
      const height = 30 + i * 10;
      const item = document.createElement("div");
      item.style.width = `${width}px`;
      item.style.height = `${height}px`;
      item.style.backgroundColor = color;
      console.log(item);
      boxes.appendChild(item);
    }
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  refs.input.value = "";
}
