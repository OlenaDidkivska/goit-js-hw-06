function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const output = document.querySelector(".color");

const buttonChangeColorHendler = (event) => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  output.textContent = randomColor;
};

buttonChangeColor.addEventListener("click", buttonChangeColorHendler);
