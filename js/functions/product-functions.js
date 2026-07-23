"use strict";
import { products } from "../data/products.js";
export function renderProduct(product, path) {
  const container = document.querySelector(".product-container");
  if (!container) return;
  container.innerHTML = "";

  const image = document.createElement("img");
  image.src = path + product.img;
  image.alt = product.info;

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("product-description-container");

  const title = document.createElement("h2");
  title.classList.add("product-title");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.classList.add("product-description");
  description.textContent = product.info;

  const songList = document.createElement("ul");

  const buyContainer = document.createElement("div");
  buyContainer.classList.add("buy-container");

  const qrDescription = document.createElement("span");
  qrDescription.classList.add("qr-desc");
  qrDescription.textContent = "Vennligst scan qr-koden for å handle (Vipps)";

  const qrCode = document.createElement("img");
  qrCode.src = path + "bilder/vipps-butikk.jpg";

  const email = document.createElement("a");
  email.href = "mailto:blattogratt@gmail.com";
  email.textContent = "blattogratt@gmail.com";

  const disclaimer = document.createElement("p");
  disclaimer.classList.add("disclaimer");
  disclaimer.append(
    "For øyeblikket er det bare mulig å handle fra vår butikk i vipps. Vi beklager for eventuelle ulemper dette kan medføre. Om du har spørsmål, eller ikke har mulighet til å handle via vipps, vennligst kontakt oss ved å sende mail til ",
    email,
  );

  container.appendChild(image);
  container.appendChild(descriptionContainer);
  descriptionContainer.appendChild(title);
  descriptionContainer.appendChild(description);
  if (product.songs?.length) {
    const heading = document.createElement("h3");
    heading.textContent = "Sanger:";

    descriptionContainer.appendChild(songList);
    songList.appendChild(heading);
    product.songs.forEach((s) => {
      const song = document.createElement("li");
      song.textContent = s;
      songList.appendChild(song);
    });
  }
  descriptionContainer.appendChild(buyContainer);
  buyContainer.appendChild(qrDescription);
  buyContainer.appendChild(qrCode);
  buyContainer.appendChild(disclaimer);
  document.querySelector(".breadcrumb-active").textContent =
    product.name.charAt(0).toUpperCase() + product.name.slice(1).toLowerCase();
}
