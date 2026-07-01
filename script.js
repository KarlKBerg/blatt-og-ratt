"use strict";
import { concerts } from "./js/concerts.js";
import { images } from "./js/images.js";
let date = new Date();

// Display concerts
function displayConcerts() {
  const container = document.querySelector(".concerts-container");
  if (!container) return;
  container.innerHTML = "";

  concerts.forEach((concert) => {
    const parsedStringDate = new Date(concert.date);
    const concertDate = parsedStringDate.toLocaleDateString("no-NO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const div = document.createElement("div");
    div.classList.add("concert-container");

    const leftInfo = document.createElement("div");
    leftInfo.classList.add("left-info");

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent = concert.displayDate;

    const name = document.createElement("span");
    name.classList.add("name");
    name.textContent = concert.name;

    const place = document.createElement("span");
    place.classList.add("place");
    place.textContent = concert.place;

    const tickets = document.createElement("a");
    tickets.classList.add("tickets");
    tickets.textContent = "BILETTER";
    tickets.href = concert.tickets;

    container.appendChild(div);
    div.appendChild(leftInfo);
    div.appendChild(place);
    div.appendChild(tickets);
    leftInfo.appendChild(dateSpan);
    leftInfo.appendChild(name);
  });
}
displayConcerts();
// Display images (Landing page)
function displayImages() {
  const container = document.querySelector(".images-container");
  if (!container) return;
  container.innerHTML = "";

  images.forEach((i) => {
    if (i.featured) {
      const imageA = document.createElement("a");
      const image = document.createElement("img");
      image.src = i.src;
      image.alt = i.alt;
      image.dataset.id = i.id;
      container.appendChild(imageA);
      imageA.appendChild(image);
    }
  });
}
displayImages();
// Display images (Images page)

// Display clicked image
function displayImage(currentImage, index) {
  const container = document.querySelector(".image-showcase-container");
  if (!container) return;
  container.innerHTML = "";

  // Showcase header
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("showcase-header");

  const title = document.createElement("h3");
  title.classList.add("title");
  title.textContent = currentImage.alt;

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.setAttribute("aria-label", "Close button");

  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa-solid", "fa-x");

  //Showcase main img
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-image-container");

  const mainImg = document.createElement("img");
  mainImg.src = currentImage.src;
  mainImg.alt = currentImage.alt;

  // Next-prev buttons
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("prev-next-btn");

  const prevBtn = document.createElement("button");
  prevBtn.setAttribute("aria-label", "Previous image");
  prevBtn.classList.add("prev");

  const prevBtnIcon = document.createElement("i");
  prevBtnIcon.classList.add("fa-solid", "fa-chevron-left");

  const nextBtn = document.createElement("button");
  nextBtn.setAttribute("aria-label", "Next image");
  nextBtn.classList.add("next");

  const nextBtnIcon = document.createElement("i");
  nextBtnIcon.classList.add("fa-solid", "fa-chevron-right");

  // Strip
  const stripContainer = document.createElement("div");
  stripContainer.classList.add("preview-strip-container");

  const prewPrevBtn = document.createElement("button");
  prewPrevBtn.classList.add("prew-prev");
  prewPrevBtn.setAttribute("aria-label", "Previous part");

  const prewPrevBtnIcon = document.createElement("i");
  prewPrevBtnIcon.classList.add("fa-solid", "fa-chevron-left");

  const prewNextBtn = document.createElement("button");
  prewNextBtn.setAttribute("aria-label", "Next part");
  prewNextBtn.classList.add("prew-next");

  const prewNextBtnIcon = document.createElement("i");
  prewNextBtnIcon.classList.add("fa-solid", "fa-chevron-right");

  const strip = document.createElement("div");
  strip.classList.add("strip");

  container.appendChild(headerDiv);
  headerDiv.appendChild(title);
  headerDiv.appendChild(closeBtn);
  closeBtn.appendChild(closeIcon);
  container.appendChild(mainContainer);
  mainContainer.appendChild(mainImg);
  mainContainer.appendChild(buttonsDiv);
  buttonsDiv.appendChild(prevBtn);
  prevBtn.appendChild(prevBtnIcon);
  buttonsDiv.appendChild(nextBtn);
  nextBtn.appendChild(nextBtnIcon);
  container.appendChild(stripContainer);
  stripContainer.appendChild(prewPrevBtn);
  prewPrevBtn.appendChild(prewPrevBtnIcon);
  stripContainer.appendChild(prewNextBtn);
  prewNextBtn.appendChild(prewNextBtnIcon);
  stripContainer.appendChild(strip);

  images.forEach((image) => {
    const imgA = document.createElement("a");
    const img = document.createElement("img");
    if (image.id === currentImage.id) {
      img.classList.add("active-image");
    }
    img.src = image.src;
    img.alt = image.alt;
    img.dataset.id = image.id;
    strip.appendChild(imgA);
    imgA.appendChild(img);
  });
  closeBtn.addEventListener("click", () => {
    imageContainer.style.display = "none";
  });
  const prewImg = document.querySelectorAll(".strip a");
  prewImg.forEach((i) => {
    i.addEventListener("click", (event) => {
      const img = event.target.dataset.id;
      const imageToShow = images.find((image) => image.id === img);
      // Find image index
      const imageIndex = images.findIndex((place) => place.id === img);
      displayImage(imageToShow, imageIndex);
    });
  });
}

// Display next concert
function nextConcert() {
  const container = document.querySelector(".next-concert");
  if (!container) return;
  container.innerHTML = "";

  const p = document.createElement("a");
  p.textContent = `Neste konsert: ${concerts[0].name} ${concerts[0].date}`;
  p.href = concerts[0].tickets;
  container.appendChild(p);
}
nextConcert();
const imageLink = document.querySelectorAll(".images-container a");
const imageContainer = document.querySelector(".image-showcase-container");
imageLink.forEach((button) => {
  button.addEventListener("click", (event) => {
    const img = event.target.dataset.id;
    if (!img) return;
    imageContainer.style.display = "flex";
    if (!imageContainer) return;
    // Find id of image to show
    const imageToShow = images.find((image) => image.id === img);
    // Find image index
    const imageIndex = images.findIndex((place) => place.id === img);
    displayImage(imageToShow, imageIndex);
  });
});
