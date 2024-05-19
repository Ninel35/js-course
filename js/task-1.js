const category = document.querySelectorAll(".item");
console.log(category);
console.log("Number of categories: " + category.length);
console.log("");

category.forEach((li) => {
  console.log(
    "Categories: " +
      li.querySelector("h2").textContent +
      "\n" +
      "Elements: " +
      li.querySelector("ul").querySelectorAll("li").length
  );
});
