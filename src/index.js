import "./style.css";

const dropdownContent = document.querySelector(".dropdownContent");
const dropdown = document.querySelector(".dropdown");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
  if (dropdownContent.style.display == "none")
    dropdownContent.style.display = "block";
  else dropdownContent.style.display = "none";
});
