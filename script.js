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

const imageLink = document.querySelector(".images-container a");
const imageContainer = document.querySelector(".image-showcase-container");
imageLink.addEventListener("click", (event) => {
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

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  imageContainer.style.display = "none";
});
