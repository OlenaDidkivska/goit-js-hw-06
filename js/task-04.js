let counterValue = 0;

let valueEl = document.querySelector("#value");

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

const buttonDecrementClickHendler = (event) => {
  if (event.type === "click") {
    counterValue -= 1;
    valueEl.textContent = counterValue;
  }
};

const buttonIncrementClickHendler = (event) => {
  if (event.type === "click") {
    counterValue += 1;
    valueEl.textContent = counterValue;
  }
};

buttonDecrement.addEventListener("click", buttonDecrementClickHendler);
buttonIncrement.addEventListener("click", buttonIncrementClickHendler);
