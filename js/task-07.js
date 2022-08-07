const sizeText = document.querySelector("#font-size-control");
let changeSizeText = document.querySelector("#text");

changeSizeText.style.fontSize = `${sizeText.value}px`;

sizeText.addEventListener("input", updateSize);

function updateSize(event) {
  changeSizeText.style.fontSize = `${event.currentTarget.value}px`;
}
