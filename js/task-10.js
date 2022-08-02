function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const form = document.querySelector("#controls");
console.log(form);

const buttonCreate = document.dataset.create;
const buttonDestroy = document.querySelector('[data-action="increment"]');

// const buttonChangeColor = document.querySelector(".change-color");
// const body = document.querySelector("body");
// const output = document.querySelector(".color");

// const buttonChangeColorHendler = (event) => {
//   let randomColor = getRandomHexColor();
//   body.style.backgroundColor = randomColor;
//   output.textContent = randomColor;
// };

// buttonChangeColor.addEventListener("click", buttonChangeColorHendler);

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     alert("Будь ласка, заповніть всі поля!");
//   }

//   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
