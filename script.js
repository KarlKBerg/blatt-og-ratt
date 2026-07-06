"use strict";
import { concerts } from "./js/concerts.js";
import { singles } from "./js/singles.js";
import { albums } from "./js/albums.js";
import { displayImages, displayAllImages } from "./js/image-functions.js";
let date = new Date();
let basePath = "./";
if (window.location.pathname.includes("sider")) {
  basePath = "../";
}

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

displayImages(basePath);

displayAllImages(basePath);
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

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".mobile-nav-container").classList.toggle("hidden");
});

// Display singles
function displaySingles() {
  const container = document.querySelector(".singles-container");
  const showcaseContainer = document.querySelector(".single-showcase");
  if (!container) return;
  if (!showcaseContainer) return;
  container.innerHTML = "";
  showcaseContainer.innerHTML = "";

  // Render all singles
  singles.forEach((single) => {
    const singleDiv = document.createElement("a");
    singleDiv.href = single.url;
    singleDiv.classList.add("single");

    const img = document.createElement("img");
    img.src = basePath + single.img;
    img.alt = single.name + " cover";

    const txtDiv = document.createElement("div");
    txtDiv.classList.add("single-txt");

    const singleYear = document.createElement("span");
    singleYear.classList.add("single-year");
    singleYear.textContent = single.year;

    const singleName = document.createElement("span");
    singleName.classList.add("single-name");
    singleName.textContent = single.name;

    container.appendChild(singleDiv);
    singleDiv.appendChild(img);
    singleDiv.appendChild(txtDiv);
    txtDiv.appendChild(singleYear);
    txtDiv.appendChild(singleName);
  });

  // Render single showcase
  const showcaseSingle = document.createElement("div");
  showcaseSingle.classList.add("showcase-single");

  const showcaseImg = document.createElement("img");
  showcaseImg.src = basePath + singles[0].img;
  showcaseImg.alt = singles[0].name + " cover";

  const showcaseTxt = document.createElement("div");
  showcaseTxt.classList.add("showcase-single-txt");

  const showcaseName = document.createElement("span");
  showcaseName.classList.add("showcase-single-name");
  showcaseName.textContent = singles[0].name;

  const showcaseYear = document.createElement("span");
  showcaseYear.classList.add("single-year");
  showcaseYear.textContent = singles[0].year;

  const listenBtn = document.createElement("a");
  listenBtn.href = singles[0].url;
  listenBtn.classList.add("sm-listen-btn");
  listenBtn.textContent = "Lytt nå!";

  showcaseContainer.appendChild(showcaseSingle);
  showcaseSingle.appendChild(showcaseImg);
  showcaseSingle.appendChild(showcaseTxt);
  showcaseTxt.appendChild(showcaseName);
  showcaseTxt.appendChild(showcaseYear);
  showcaseTxt.appendChild(listenBtn);
}
displaySingles();

// Display albums
function displayAlbums() {
  const container = document.querySelector(".albums-container");
  const showcaseContainer = document.querySelector(".album-showcase");
  if (!container) return;
  if (!showcaseContainer) return;
  container.innerHTML = "";
  showcaseContainer.innerHTML = "";

  // Render all singles
  albums.forEach((album) => {
    const singleDiv = document.createElement("a");
    singleDiv.href = album.url;
    singleDiv.classList.add("single");

    const img = document.createElement("img");
    img.src = basePath + album.img;
    img.alt = album.alt;

    const txtDiv = document.createElement("div");
    txtDiv.classList.add("single-txt");

    const singleYear = document.createElement("span");
    singleYear.classList.add("single-year");
    singleYear.textContent = album.year;

    const singleName = document.createElement("span");
    singleName.classList.add("single-name");
    singleName.textContent = album.name;

    container.appendChild(singleDiv);
    singleDiv.appendChild(img);
    singleDiv.appendChild(txtDiv);
    txtDiv.appendChild(singleYear);
    txtDiv.appendChild(singleName);
  });

  // Render single showcase
  const showcaseSingle = document.createElement("div");
  showcaseSingle.classList.add("showcase-single");

  const showcaseImg = document.createElement("img");
  showcaseImg.src = basePath + albums[0].img;
  showcaseImg.alt = albums[0].alt;

  const showcaseTxt = document.createElement("div");
  showcaseTxt.classList.add("showcase-single-txt");

  const showcaseName = document.createElement("span");
  showcaseName.classList.add("showcase-single-name");
  showcaseName.textContent = albums[0].name;

  const showcaseYear = document.createElement("span");
  showcaseYear.classList.add("single-year");
  showcaseYear.textContent = albums[0].year;

  const listenBtn = document.createElement("a");
  listenBtn.href = albums[0].url;
  listenBtn.classList.add("sm-listen-btn");
  listenBtn.textContent = "Lytt nå!";

  showcaseContainer.appendChild(showcaseSingle);
  showcaseSingle.appendChild(showcaseImg);
  showcaseSingle.appendChild(showcaseTxt);
  showcaseTxt.appendChild(showcaseName);
  showcaseTxt.appendChild(showcaseYear);
  showcaseTxt.appendChild(listenBtn);
}
displayAlbums();

// Check if singles or albums is selected
function musicNav() {
  const singlePage = document.querySelector(".singles");
  const albumPage = document.querySelector(".albums");
  const singleSelect = document.getElementById("singles-btn");
  const albumSelect = document.getElementById("albums-btn");
  if (!singleSelect) return;
  singleSelect.addEventListener("click", () => {
    if (singleSelect.classList.contains("active")) {
      singleSelect.classList.remove("active");
      singlePage.classList.add("hidden");
      albumSelect.classList.add("active");
      albumPage.classList.remove("hidden");
    } else {
      albumSelect.classList.remove("active");
      albumPage.classList.add("hidden");
      singleSelect.classList.add("active");
      singlePage.classList.remove("hidden");
    }
  });
  if (!albumSelect) return;
  albumSelect.addEventListener("click", () => {
    if (albumSelect.classList.contains("active")) {
      albumSelect.classList.remove("active");
      albumPage.classList.add("hidden");
      singleSelect.classList.add("active");
      singlePage.classList.remove("hidden");
    } else {
      singleSelect.classList.remove("active");
      singlePage.classList.add("hidden");
      albumSelect.classList.add("active");
      albumPage.classList.remove("hidden");
    }
  });
}
musicNav();
