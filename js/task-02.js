const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const items = document.createElement("li");
  items.classList.add("item");
  items.textContent = `${ingredient}`;
  list.appendChild(items);
}
