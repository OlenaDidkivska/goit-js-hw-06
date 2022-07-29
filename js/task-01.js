const elements = document.querySelectorAll("ul .item");
console.log("Number of categories:", elements.length);
for (const element of elements) {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
}
