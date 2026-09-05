// =====================================================
// RAJA AYAM ASAP
// JAVASCRIPT
// =====================================================


// =====================================================
// NOMOR WHATSAPP
// =====================================================

const whatsappNumber = "6281241637433";


// =====================================================
// NAVBAR
// =====================================================

const navbar =
    document.getElementById("navbar");

const navToggle =
    document.getElementById("navToggle");

const navMenu =
    document.getElementById("navMenu");


// Navbar berubah saat halaman di-scroll

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// Tombol menu HP

navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {

        navToggle.textContent = "✕";

    } else {

        navToggle.textContent = "☰";

    }

});


// Tutup menu setelah memilih halaman

document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            navToggle.textContent = "☰";

        });

    });



// =====================================================
// ANIMASI SAAT SCROLL
// =====================================================

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});



// =====================================================
// TOMBOL PESAN MENU
// =====================================================

const orderButtons =
    document.querySelectorAll(".order-btn");


orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        const menu =
            button.dataset.menu;


        const message =
            `Halo Raja Ayam Asap 👋

Saya ingin memesan:

🍗 ${menu}

Mohon info ketersediaan dan total pesanannya.
Terima kasih!`;


        const encodedMessage =
            encodeURIComponent(message);


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

});



// =====================================================
// TAHUN FOOTER
// =====================================================

document.getElementById("year").textContent =
    new Date().getFullYear();



// =====================================================
// EFEK PARALLAX BACKGROUND
// =====================================================

const heroBg =
    document.querySelector(".hero-bg");


window.addEventListener("scroll", () => {

    if (
        window.innerWidth > 700 &&
        heroBg
    ) {

        const movement =
            Math.min(
                window.scrollY * 0.12,
                80
            );


        heroBg.style.transform =
            `scale(1.03) translateY(${movement}px)`;

    }

});