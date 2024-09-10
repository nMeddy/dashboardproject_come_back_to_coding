// ================= ajout de l'hover class en selection de la élément de la liste du navBar =====================
let list = document.querySelectorAll(".navigation li");

const activeLink = () => {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
};

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// ====================== Menu toggle ====================
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

// =====toggle========
toggle.onclick = () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
