"use strict";
import { products } from "../data/products.js";

function renderProducts(path, category) {
  const container = document.querySelector(".products");
  if (!container) return;
  container.innerHTML = "";

  const filtered =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  filtered.forEach((product) => {
    const productDiv = document.createElement("a");
    productDiv.classList.add("product");
    productDiv.href = `${path}sider/produkt.html?id=${product.id}`;

    const img = document.createElement("img");
    img.src = path + product.img;
    img.alt = product.info;

    const titlePriceDiv = document.createElement("div");
    titlePriceDiv.classList.add("title-price-div");

    const title = document.createElement("h4");
    title.classList.add("product-title");
    title.textContent = product.name;

    const price = document.createElement("span");
    price.classList.add("product-price");
    price.textContent = product.price + "kr";

    container.appendChild(productDiv);
    productDiv.appendChild(img);
    productDiv.appendChild(titlePriceDiv);
    titlePriceDiv.appendChild(title);
    titlePriceDiv.appendChild(price);
  });
}

export function displayProducts(path) {
  const container = document.querySelector(".products");
  if (!container) return;

  const buttons = document.querySelectorAll(".cat-btn");
  const pageTitle = document.querySelector(".all-products h2");
  buttons.forEach((b) => {
    b.addEventListener("click", () => {
      buttons.forEach((t) => t.classList.remove("active"));
      b.classList.add("active");
      renderProducts(path, b.dataset.cat);
      if (b.dataset.cat === "all") {
        pageTitle.textContent = "Alle produkter";
      } else if (b.dataset.cat === "vinyl") {
        pageTitle.textContent = "Vinyl-plater";
      } else if (b.dataset.cat === "cd") {
        pageTitle.textContent = "CD-plater";
      } else if (b.dataset.cat === "t-shirts") {
        pageTitle.textContent = "T-skjorter";
      } else if (b.dataset.cat === "misc") {
        pageTitle.textContent = "Misc produkter";
      }
    });
  });
  renderProducts(path, "all");
}
