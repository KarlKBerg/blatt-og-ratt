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
} from "./js/functions/image-functions.js";
import {
  displayConcerts,
  nextConcert,
} from "./js/functions/concert-functions.js";

let date = new Date();
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
