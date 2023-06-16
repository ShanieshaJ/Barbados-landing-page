// Header sticky nav bar on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Map logo change on scroll
let mapImg = document.querySelector("img");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    mapImg.setAttribute("src", "barbados-logo-clear.png");
  } else {
    mapImg.setAttribute("src", "barbados-logo-black.png");
  }
});

// Tooltip on hover
let tooltip = document.querySelector(".countryName-tooltip");

let colors = [
  "#AA0A27",
  "#63B7C5",
  "#BDBE6C",
  "#F3C65F",
  "#BDA2C4",
  "#D6AD89",
  "#ECC1B2",
  "#E49759",
  "#84919D",
  "#00267F",
  "#387024",
];
let parishes = [
  "Christ Chruch",
  "Saint Andrew",
  "Saint George",
  "Saint James",
  "Saint John",
  "Saint Joseph",
  "Saint Lucy",
  "Saint Michael",
  "Saint Peter",
  "Saint Philip",
  "Saint Thomas",
];

let contents = {};

for (let i = 1; i <= 11; i++) {
  contents["tooltip" + i] =
    '<div class="tooltipName" style="color:' +
    colors[i] +
    '">' +
    parishes[i - 1] +
    "</div>";
}

[].forEach.call(document.querySelectorAll("path.BAR-map"), function (item) {
  item.addEventListener("click", function () {
    window.open(this.getAttribute("data-link"));
  });

  item.addEventListener("mouseenter", function () {
    tooltip.innerHTML = contents[item.getAttribute("data-tooltip")];
    tooltip.style.display = "block";
  });

  item.addEventListener("mousemove", function (e) {
    tooltip.style.top = e.clientY + "px";
    tooltip.style.left = e.clientX + "px";
  });

  item.addEventListener("mouseleave", function () {
    tooltip.style.display = "none";
  });
});

//Menu button size change when window is resized
let menuBtn = document.querySelector("#menu-btn");
let menu = document.querySelector(".navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  menu.classList.toggle("active");
};

menuBtn.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  menu.classList.remove("active");
};
