document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        // Menü aç/kapat
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });

        // Sayfa geçişlerinde menünün açık kalmasını engelle
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function () {
                setTimeout(() => {
                    navLinks.classList.remove("show");
                }, 300);
            });
        });

        // Sayfada başka bir yere tıklanınca menüyü kapat
        document.addEventListener("click", function (event) {
            if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
                navLinks.classList.remove("show");
            }
        });
    }
});
