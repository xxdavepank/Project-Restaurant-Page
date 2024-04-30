export function loadContactContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const contactInfo = document.createElement("p");
  contactInfo.textContent =
    "Contact Information: Phone: 123-456-7890 | Email: info@example.com";

  contactDiv.appendChild(contactInfo);
  contentDiv.appendChild(contactDiv);
}
