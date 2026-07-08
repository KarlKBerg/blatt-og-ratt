"use strict";
import { singles } from "../data/singles.js";
import { albums } from "../data/albums.js";
// Display singles
export function displaySingles(path) {
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
    img.src = path + single.img;
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
  showcaseImg.src = path + singles[0].img;
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

// Display albums
export function displayAlbums(path) {
  const container = document.querySelector(".albums-container");
  const showcaseContainer = document.querySelector(".album-showcase");
  if (!container) return;
  if (!showcaseContainer) return;
  container.innerHTML = "";
  showcaseContainer.innerHTML = "";

  // Render all albums
  albums.forEach((album) => {
    const singleDiv = document.createElement("a");
    singleDiv.href = album.url;
    singleDiv.classList.add("single");

    const img = document.createElement("img");
    img.src = path + album.img;
    img.alt = album.name + " cover";

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

  // Render album showcase
  const showcaseSingle = document.createElement("div");
  showcaseSingle.classList.add("showcase-single");

  const showcaseImg = document.createElement("img");
  showcaseImg.src = path + albums[0].img;
  showcaseImg.alt = albums[0].name + " cover";

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

// Check if singles or albums is selected
export function musicNav() {
  const singlePage = document.querySelector(".singles");
  const albumPage = document.querySelector(".albums");
  const singleSelect = document.getElementById("singles-btn");
  const albumSelect = document.getElementById("albums-btn");
  if (!singleSelect || !albumSelect) return;

  const buttonsDiv = document.querySelectorAll(".music-btn");

  buttonsDiv.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      buttonsDiv.forEach((b) => {
        b.classList.remove("active");
        if (e.target === singleSelect) {
          singlePage.classList.remove("hidden");
          albumPage.classList.add("hidden");
        } else {
          singlePage.classList.add("hidden");
          albumPage.classList.remove("hidden");
        }
      });
      btn.classList.add("active");
    });
  });
}
