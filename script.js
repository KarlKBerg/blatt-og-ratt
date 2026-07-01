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
// Display images (Gallery page)
function displayAllImages() {
  const container = document.querySelector(".gallery-container");
  if (!container) return;
  container.innerHTML = "";

  // Show first image in showcase

  // Load all images in grid
  images.forEach((image) => {
    const imgContainer = document.createElement("a");
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.dataset.id = image.id;

    container.appendChild(imgContainer);
    imgContainer.appendChild(img);
  });
  // Get ID of clicked image

  // Show clicked image in showcase
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
