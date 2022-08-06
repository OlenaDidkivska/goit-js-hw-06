const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient) {
  const items = document.createElement("li");
  items.classList.add("item");
  items.textContent = `${ingredient}`;
  list.appendChild(items);
});
