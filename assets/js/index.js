let html = document.getElementById("html");
let themeBtn = document.getElementById("theme-toggle-button");

themeBtn.addEventListener("click", function (e) {
  html.classList.toggle("dark");
});

let filterBtn = document.getElementsByClassName("portfolio-filter");
let portfolioItem = document.getElementsByClassName("portfolio-item");

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    for (let j = 0; j < portfolioItem.length; j++) {
      if (filterBtn[i].getAttribute("data-filter") == "all") {
        portfolioItem[j].classList.remove("hidden");
      } else if (
        filterBtn[i].getAttribute("data-filter") ==
        portfolioItem[j].getAttribute("data-category")
      ) {
        portfolioItem[j].classList.remove("hidden");
      } else {
        portfolioItem[j].classList.add("hidden");
      }
    }
  });
}

let sideToggle = document.getElementById("settings-toggle");
let sideSitting = document.getElementById("settings-sidebar");

sideToggle.addEventListener("click", function () {
  sideSitting.classList.toggle("translate-x-full");
});

let scrollBtn = document.getElementById("scroll-to-top");
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


window.addEventListener("scroll", function () {
if (window.scrollY > 300) {
    scrollBtn.classList.remove('opacity-0','invisible')
} else {
    scrollBtn.classList.add('opacity-0','invisible')
    
}
});