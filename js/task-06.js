const validationInput = document.querySelector("#validation-input");

const validationInputHendler = (event) => {
  const textInput = event.currentTarget.value.trim();
  const attributeLength = Number(validationInput.getAttribute("data-length"));
  validationInput.addEventListener("blur", () => {
    if (textInput.length === attributeLength) {
      validationInput.classList.add("valid");
      validationInput.classList.remove("invalid");
    } else {
      validationInput.classList.add("invalid");
    }
  });
};

validationInput.addEventListener("change", validationInputHendler);
