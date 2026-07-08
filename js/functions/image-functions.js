"use strict";
import { images } from "../data/images.js";

// Display images (Landing page)
export function displayImages(path) {
  const container = document.querySelector(".images-container");
  if (!container) return;
  container.innerHTML = "";

  images.forEach((i) => {
    if (i.featured) {
      const imageA = document.createElement("button");
      const image = document.createElement("img");
      image.src = path + i.src;
      image.alt = i.alt;
      image.dataset.id = i.id;
      container.appendChild(imageA);
      imageA.appendChild(image);
    }
  });
}

// Display images (Gallery page)
export function displayAllImages(path) {
  let imgPosition = 0;
  const container = document.querySelector(".gallery-container");
  if (!container) return;
  container.innerHTML = "";

  // Show first image in showcase
  const showcase = document.querySelector(".gallery-showcase");
  if (!showcase) return;
  showcase.innerHTML = "";

  const showcaseImage = document.createElement("img");
  showcaseImage.src = path + images[imgPosition].src;
  showcaseImage.alt = images[imgPosition].alt;
  showcase.appendChild(showcaseImage);

  // Load all images in grid
  images.forEach((image) => {
    const imgContainer = document.createElement("button");
    const img = document.createElement("img");
    img.src = path + image.src;
    img.alt = image.alt;
    img.dataset.id = image.id;

    container.appendChild(imgContainer);
    imgContainer.appendChild(img);
  });
  // Get ID of clicked image
  container.querySelectorAll("a").forEach((i) => {
    i.addEventListener("click", (event) => {
      let imgId = event.target.dataset.id;
      const position = images.findIndex((imageID) => imageID.id === imgId);
      imgPosition = position;
      // Show clicked image in showcase
      showcaseImage.src = path + images[imgPosition].src;
      showcaseImage.alt = images[imgPosition].alt;
      showcase.appendChild(showcaseImage);
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
}

const imagesContainer = document.querySelector(".images-container");
const imageOverlay = document.querySelector(".image-overlay");
const showImage = document.querySelector(".overlay-box img");
const title = document.getElementById("overlay-heading");
const closeOverlay = document.querySelector(".overlay-header i");

// Open modal function
function openImageModal(i) {
  showImage.src = i.src;
  showImage.alt = i.dataset.id;
  title.textContent = "Tittel: " + i.alt;
  imageOverlay.style.display = "flex";
  document.body.classList.add("stop-scrolling");
}
// Close modal function
function closeModal() {
  imageOverlay.style.display = "none";
  document.body.classList.remove("stop-scrolling");
}
// Modal event listeners

export function modalListeners() {
  if (!imagesContainer || !imageOverlay || !closeOverlay) return;
  // Open modal
  imagesContainer.querySelectorAll("img").forEach((image) => {
    image.addEventListener("click", (event) => {
      // Open image overlay
      openImageModal(image);
    });
  });
  // Close modal
  closeOverlay.addEventListener("click", closeModal);
  // Close modal by clicking outside
  imageOverlay.addEventListener("click", (event) => {
    if (event.target === imageOverlay) {
      closeModal();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
