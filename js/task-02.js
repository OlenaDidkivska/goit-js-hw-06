const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

function getListContent() {
  let result = [];
  ingredients.forEach(function (ingredient) {
    let item = document.createElement("li");
    item.classList.add("item");
    item.textContent = `${ingredient}`;
    result.push(item);
  });
  return result;
}

list.append(...getListContent());
