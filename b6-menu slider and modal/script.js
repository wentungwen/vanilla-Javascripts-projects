const closeModel = document.getElementById("close");
const openModel = document.getElementById("openModel");
const model = document.getElementById("model");
const menuToggle = document.getElementById("toggle");
const nav = document.querySelector("nav");

openModel.addEventListener("click", () => {
  model.classList.add("show-model");
});

closeModel.addEventListener("click", () => {
  model.classList.remove("show-model");
});

menuToggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

window.addEventListener("click", (e) => {
  e.target == model ? model.classList.remove("show-model") : false;
});
