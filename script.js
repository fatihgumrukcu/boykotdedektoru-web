document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Eğer hamburger menü butonu varsa aç/kapat işlemi
    if (navToggle && navLinks) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });

        // Sayfada başka bir yere tıklanınca menüyü kapat
        document.addEventListener("click", function (event) {
            if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
                navLinks.classList.remove("show");
            }
        });
    }
});
