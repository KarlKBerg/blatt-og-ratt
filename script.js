"use strict";
// Imports
import { products } from "./js/data/products.js";
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
import { displayConcerts } from "./js/functions/concert-functions.js";
import { initNav } from "./js/functions/nav-functions.js";
import { displayProducts } from "./js/functions/shop-functions.js";
import { renderProduct } from "./js/functions/product-functions.js";

let basePath = "./";
if (window.location.pathname.includes("sider")) {
  basePath = "../";
}
const ID = new URLSearchParams(window.location.search).get("id");
const product = products.find((p) => p.id === ID);
// Call functions
displayConcerts();
displayImages(basePath);
displayAllImages(basePath);
displaySingles(basePath);
displayAlbums(basePath);
musicNav();
initNav();
modalListeners();
displayProducts(basePath);
if (product) {
  renderProduct(product, basePath);
} else if (document.querySelector(".product-container")) {
  document.querySelector(".product-container").textContent =
    "Fant ikke produktet.";
}
