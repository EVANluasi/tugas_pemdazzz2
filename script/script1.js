const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("li");

let isOpen = false;

function toggleMenu() {
  isOpen = !isOpen;

  if (isOpen) {
    nav.classList.add("open");
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 100); 
    });
  } else {
    nav.classList.remove("open");
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
      }, index * 100);
    });
  }
}

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});

const button = document.createElement("button");
button.textContent = "Menu";
button.style.cursor = "pointer";
button.style.padding = "10px";
button.style.marginBottom = "20px";
nav.insertBefore(button, nav.firstChild);

button.addEventListener("click", toggleMenu);

navItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.3s ease, transform 0.3s ease";
});