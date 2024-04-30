export function loadHomepageContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const h = document.createElement("h1");
  h.textContent =
    "Immerse yourself in a world of culinary delight, where every dish tells a story and every bite ignites your taste buds.";
  contentDiv.appendChild(h);

  const headline = document.createElement("h1");
  headline.textContent = "░░░░░░░░░░░░░░";
  contentDiv.appendChild(headline);

  const description = document.createElement("h1");
  description.textContent =
    "Experience the magic of exceptional dining that awaits you here.";
  contentDiv.appendChild(description);
}
