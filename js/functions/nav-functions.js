"use strict";

// Hamburger navigation event listener
export function initNav() {
  const hamburger = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav-container");
  if (!hamburger || !mobileNav) return;
  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });
}
