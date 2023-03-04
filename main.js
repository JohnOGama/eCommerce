const btnEl = document.querySelector(".hamb");
const closebtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const shopbtn = document.querySelectorAll(".by-n");
const showSuccess = document.querySelector(".show-success");
const showSuccessAtc = document.querySelector(".show-success-atc");
const timesbtn = document.querySelector(".times-btn");
const timesbtnAtc = document.querySelector(".times-btn-atc");
const parent = document.querySelector(".prd-itm-grd");
const atc = document.querySelector(".at-c");
const showBar = document.querySelector(".show-search");
const search = document.querySelector(".cart-box");

btnEl.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closebtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

parent.addEventListener("click", () => {
  showSuccess.classList.toggle("active");
});

timesbtn.addEventListener("click", () => {
  showSuccess.classList.remove("active");
});

search.addEventListener("click", () => {
  showBar.classList.toggle("active");
});
