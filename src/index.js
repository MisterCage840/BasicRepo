import "./style.css";
import apple from "./apple.jpg";
import banana from "./banana.jpg";
import orange from "./orange.jpeg";

const dropdownContent = document.querySelector(".dropdownContent");
const dropdown = document.querySelector(".dropdown");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
  if (dropdownContent.style.display == "none")
    dropdownContent.style.display = "block";
  else dropdownContent.style.display = "none";
});

//image carousel

const imageFrame = document.querySelector(".imageFrame");
const imageContainer = document.querySelector(".imageContainer");
const nextContainer = document.querySelector(".nextBtn");
const previousContainer = document.querySelector(".previousBtn");

// Image factory
var createImage = function (src, title) {
  var img = new Image();
  img.src = src;
  img.alt = title;
  img.title = title;
  return img;
};

// array of images
var images = [];
images.push(createImage(apple, "apple"));
images.push(createImage(banana, "banana"));
images.push(createImage(orange, "orange"));

//change img function
const changeImg = function (selectedImg) {
  imageContainer.innerHTML = "";
  imageContainer.appendChild(selectedImg);
  imageFrame.appendChild(imageContainer);
  imageFrame.appendChild(nextContainer);
};

changeImg(images[0]);

const next = function () {
  let imageSelector = document.querySelector(".imageContainer>img");
  let imgIndex = null;
  images.forEach((img, index) => {
    if (img.title == imageSelector.title) imgIndex = index;
  });
  console.log(imgIndex);
  if (imgIndex == images.length - 1) {
    imgIndex = 0;
    changeImg(images[imgIndex]);
  } else changeImg(images[imgIndex + 1]);
};

setInterval(() => {
  next();
}, 5000);

const previous = function () {
  let imageSelector = document.querySelector(".imageContainer>img");
  let imgIndex = null;
  images.forEach((img, index) => {
    if (img.title == imageSelector.title) imgIndex = index;
  });
  console.log(imgIndex);
  if (imgIndex == 0) {
    imgIndex = images.length - 1;
    changeImg(images[imgIndex]);
  } else changeImg(images[imgIndex - 1]);
};

previousContainer.addEventListener("click", () => {
  previous();
});
nextContainer.addEventListener("click", () => {
  next();
});
