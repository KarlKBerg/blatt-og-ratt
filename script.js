"use strict";
// Imports
import {
  displaySingles,
  displayAlbums,
  musicNav,
} from "./js/functions/albums-singles-functions.js";
import {
  displayImages,
  displayAllImages,
  modalListeners,
} from "./js/functions/image-functions.js";
import {
  displayConcerts,
  nextConcert,
} from "./js/functions/concert-functions.js";
import { initNav } from "./js/functions/nav-functions.js";

let basePath = "./";
if (window.location.pathname.includes("sider")) {
  basePath = "../";
}

// Call functions
displayConcerts();
displayImages(basePath);
displayAllImages(basePath);
nextConcert();
displaySingles(basePath);
displayAlbums(basePath);
musicNav();
initNav();
modalListeners();
