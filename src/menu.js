export function loadMenuContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const menuHeading = document.createElement("h2");
  // menuHeading.textContent =
  // "Each of these dishes is carefully crafted with premium ingredients and exquisite flavors, reflecting the sophistication and elegance of a five-star dining experience.";

  const appetizer = document.createElement("a");
  appetizer.textContent = "Appetizer";
  appetizer.classList.add("nav-link");
  appetizer.addEventListener("click", () => switchTabs("appetizer"));
  menuDiv.appendChild(appetizer);

  const soup = document.createElement("a");
  soup.textContent = "Soup";
  soup.classList.add("nav-link");
  soup.addEventListener("click", () => switchTabs("soup"));
  menuDiv.appendChild(soup);

  const mainCourse = document.createElement("a");
  mainCourse.textContent = "Main Course";
  mainCourse.classList.add("nav-link");
  mainCourse.addEventListener("click", () => switchTabs("mainCourse"));
  menuDiv.appendChild(mainCourse);

  const seafoodDish = document.createElement("a");
  seafoodDish.textContent = "Seafood Dish";
  seafoodDish.classList.add("nav-link");
  seafoodDish.addEventListener("click", () => switchTabs("seafoodDish"));
  menuDiv.appendChild(seafoodDish);

  const dessert = document.createElement("a");
  dessert.textContent = "Dessert";
  dessert.classList.add("nav-link");
  dessert.addEventListener("click", () => switchTabs("dessert"));
  menuDiv.appendChild(dessert);

  const appetizerImg = document.createElement("img");
  appetizerImg.classList.add("appetizerImg");
  appetizerImg.src = "path/to/appetizer_image.jpg"; // Replace with the actual path to your appetizer image
  appetizerImg.alt = "Seared Foie Gras with Fig Compote and Brioche Toast"; // Replace with appropriate alt text

  const appetizerInfo = document.createElement("p");
  appetizerInfo.textContent =
    "Seared Foie Gras with Fig Compote and Brioche Toast (A luxurious dish featuring perfectly seared foie gras paired with the sweetness of fig compote and the richness of brioche toast.)";

  // Create a container div to hold both the image and the description
  const appetizerContainer = document.createElement("div");
  appetizerContainer.classList.add("appetizerContainer");

  // Append the image and description to the container div
  appetizerContainer.appendChild(appetizerImg);
  appetizerContainer.appendChild(appetizerInfo);

  const soupDiv = document.createElement("div");
  soupDiv.classList.add("soupDiv");
  const soupInfo = document.createElement("p");
  soupInfo.textContent =
    "Lobster Bisque with Cognac Cream (A velvety smooth lobster bisque infused with the flavors of cognac and finished with a decadent cognac cream.)";
  soupDiv.appendChild(soupInfo);

  const mainCourseDiv = document.createElement("div");
  mainCourseDiv.classList.add("mainCourseDiv");
  const mainCourseInfo = document.createElement("p");
  mainCourseInfo.textContent =
    "Chateaubriand Steak with Truffle Butter (A prime cut of beef tenderloin, cooked to perfection and served with aromatic truffle butter, accompanied by seasonal vegetables and pommes fondant.)";
  mainCourseDiv.appendChild(mainCourseInfo);

  const seafoodDishDiv = document.createElement("div");
  seafoodDishDiv.classList.add("seafoodDishDiv");
  const seafoodDishInfo = document.createElement("p");
  seafoodDishInfo.textContent =
    "Pan-Seared Scallops with Saffron Risotto (Fresh scallops delicately seared to a golden brown, served atop a bed of creamy saffron-infused risotto and garnished with microgreens.)";
  seafoodDishDiv.appendChild(seafoodDishInfo);

  const dessertDiv = document.createElement("div");
  dessertDiv.classList.add("dessertDiv");
  const dessertInfo = document.createElement("p");
  dessertInfo.textContent =
    "Chocolate Lava Cake with Raspberry Coulis (A decadent chocolate lava cake with a molten center, served alongside a tangy raspberry coulis and a scoop of house-made vanilla bean ice cream.)";
  dessertDiv.appendChild(dessertInfo);

  menuDiv.appendChild(menuHeading);
  contentDiv.appendChild(menuDiv);
  contentDiv.appendChild(appetizerDiv);
  contentDiv.appendChild(soupDiv);
  contentDiv.appendChild(mainCourseDiv);
  contentDiv.appendChild(seafoodDishDiv);
  contentDiv.appendChild(dessertDiv);

  // Initially hide all content divs except appetizer
  appetizerDiv.style.display = "block";
  soupDiv.style.display = "none";
  mainCourseDiv.style.display = "none";
  seafoodDishDiv.style.display = "none";
  dessertDiv.style.display = "none";

  function switchTabs(tabName) {
    // Hide all content divs
    appetizerDiv.style.display = "none";
    soupDiv.style.display = "none";
    mainCourseDiv.style.display = "none";
    seafoodDishDiv.style.display = "none";
    dessertDiv.style.display = "none";

    // Show the selected content div based on the tabName
    switch (tabName) {
      case "appetizer":
        appetizerDiv.style.display = "block";
        break;
      case "soup":
        soupDiv.style.display = "block";
        break;
      case "mainCourse":
        mainCourseDiv.style.display = "block";
        break;
      case "seafoodDish":
        seafoodDishDiv.style.display = "block";
        break;
      case "dessert":
        dessertDiv.style.display = "block";
        break;
      default:
        console.log("Invalid tab name");
    }
  }
}
