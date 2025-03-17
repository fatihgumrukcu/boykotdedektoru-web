// FORM DOĞRULAMA VE GÖNDERİM MESAJI
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let isValid = true;
            const inputs = form.querySelectorAll("input, textarea");

            inputs.forEach((input) => {
                if (input.hasAttribute("required") && input.value.trim() === "") {
                    isValid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "1px solid #1A3366";
                }
            });

            if (!isValid) {
                alert("Lütfen tüm zorunlu alanları doldurun.");
                return;
            }

            alert("Form başarıyla gönderildi! Teşekkür ederiz.");
            form.reset();
        });
    });
});

// MOBİL NAVBAR MENÜ AÇILIP KAPANMASI (İSTEĞE BAĞLI)
const navToggle = document.createElement("div");
navToggle.className = "nav-toggle";
navToggle.innerHTML = "☰";
document.querySelector("nav").appendChild(navToggle);

navToggle.addEventListener("click", function () {
    const navLinks = document.querySelector(".nav-links");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});
