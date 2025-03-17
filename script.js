document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    if (navToggle && mobileNav) {
        // Menü aç/kapat
        navToggle.addEventListener("click", function () {
            mobileNav.classList.toggle("show");
        });

        // Sayfa geçişlerinde menünün açık kalmasını engelle
        document.querySelectorAll(".mobile-nav a").forEach(link => {
            link.addEventListener("click", function () {
                setTimeout(() => {
                    mobileNav.classList.remove("show");
                }, 300);
            });
        });

        // Sayfada başka bir yere tıklanınca menüyü kapat
        document.addEventListener("click", function (event) {
            if (!mobileNav.contains(event.target) && !navToggle.contains(event.target)) {
                mobileNav.classList.remove("show");
            }
        });
    }
});
