const elements = document.querySelectorAll("ul .item");
console.log("Number of categories:", elements.length);
elements.forEach(function (element) {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
