document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  var nav = document.querySelector(".header__nav");
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    setTimeout(function () {
      nav.style.maxHeight = "100vh";
    }, 10);
  } else {
    nav.style.maxHeight = "0";
  }
});

var links = document.querySelectorAll(".header__nav a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".burger").classList.remove("active");
    document.querySelector(".header__nav").classList.remove("open");
    document.querySelector(".header__nav").style.maxHeight = "0";
  });
});
