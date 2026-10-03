// ==========================================================
// Despacho de Arquitectura — interacciones del sitio
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Cambia el header a fondo sólido al hacer scroll en home
  if (document.body.classList.contains("home")) {
    var header = document.querySelector(".site-header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 80) {
        header.style.background = "#ffffff";
        header.querySelectorAll(".main-nav a, .logo a").forEach(function (el) {
          el.style.color = "#141414";
        });
      } else {
        header.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent)";
        header.querySelectorAll(".main-nav a, .logo a").forEach(function (el) {
          el.style.color = "#ffffff";
        });
      }
    });
  }

});
