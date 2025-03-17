document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menü butonunu oluştur
    const navToggle = document.createElement("button");
    navToggle.className = "nav-toggle";
    navToggle.innerHTML = "☰";
    document.querySelector("nav").appendChild(navToggle);

    // Menü öğesini seç
    const navLinks = document.querySelector(".nav-links");

    // Hamburger menü aç/kapat
    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Sayfada başka bir yere tıklanınca menüyü kapat
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});
