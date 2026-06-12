"use strict";
import { concerts } from "./js/concerts.js";
import { images } from "./js/images.js";
let date = new Date();

// Display concerts
function displayConcerts() {
  const container = document.querySelector(".concerts-container");
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
    if (parsedStringDate >= date) {
      container.appendChild(div);
      div.appendChild(leftInfo);
      div.appendChild(place);
      div.appendChild(tickets);
      leftInfo.appendChild(dateSpan);
      leftInfo.appendChild(name);
    }
  });
}
displayConcerts();
console.log("hello");
// Display images
function displayImages() {
  const container = document.querySelector(".images-container");
  container.innerHTML = "";

  images.forEach((i) => {
    const image = document.createElement("img");
    image.src = i.src;
    image.alt = i.alt;

    container.appendChild(image);
  });
}
displayImages();
