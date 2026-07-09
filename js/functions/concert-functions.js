"use strict";
import { concerts } from "../data/concerts.js";

// Display concerts
export function displayConcerts() {
  const container = document.querySelector(".concerts-container");
  if (!container) return;
  container.innerHTML = "";

  concerts.forEach((concert) => {
    const div = document.createElement("div");
    div.classList.add("concert-container");

    const leftInfo = document.createElement("div");
    leftInfo.classList.add("left-info");

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent = concert.date;

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
