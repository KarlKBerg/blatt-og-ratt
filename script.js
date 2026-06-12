import { concerts } from "/js/concerts.js";

let date = new Date();
let currentDate = date.toLocaleDateString("no-NO", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

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

    const date = document.createElement("span");
    date.classList.add("date");
    date.textContent = concert.date;

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
    if (concertDate >= currentDate) {
      container.appendChild(div);
      div.appendChild(leftInfo);
      div.appendChild(place);
      div.appendChild(tickets);
      leftInfo.appendChild(date);
      leftInfo.appendChild(name);
    }
  });
}
displayConcerts();
