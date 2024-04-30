import { loadHomepageContent } from "./homepage.js";
import { loadContactContent } from "./contact.js";
import { loadMenuContent } from "./menu.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.innerHTML = "<h1>LAMI KEYO!</h1>";
  header.classList.add("header");
  document.body.insertBefore(header, document.body.firstChild);

  const nav = document.createElement("nav");

  // Create and append home link
  const homeLink = document.createElement("a");
  homeLink.textContent = "Home";
  homeLink.classList.add("nav-link");
  homeLink.addEventListener("click", () => switchTab("home"));
  nav.appendChild(homeLink);

  // Create and append menu link
  const menuLink = document.createElement("a");
  menuLink.textContent = "Menu";
  menuLink.classList.add("nav-link");
  menuLink.addEventListener("click", () => switchTab("menu"));
  nav.appendChild(menuLink);

  // Create and append contact link
  const contactLink = document.createElement("a");
  contactLink.textContent = "Contact";
  contactLink.classList.add("nav-link");
  contactLink.addEventListener("click", () => switchTab("contact"));
  nav.appendChild(contactLink);

  // Append the nav element to the existing header
  // Replace "existing-header-id" with the actual ID of your header element
  header.appendChild(nav);

  const footer = document.createElement("footer");
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `<p>&copy; ${currentYear} TARA NA!. All rights reserved.</p>`;
  document.body.appendChild(footer);

  loadHomepageContent(); // Load homepage content by default
});

function switchTab(tabName) {
  switch (tabName) {
    case "home":
      loadHomepageContent();
      break;
    case "contact":
      loadContactContent();
      break;
    case "menu":
      loadMenuContent();
      break;
    default:
      console.log("Invalid tab name");
  }
}
