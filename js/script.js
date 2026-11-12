/* =====================================================
   Portfolio JavaScript
   Tasbiha Shahzaib
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                preloader.classList.add("hidden");
            }, 400);
        });
        // Fallback
        setTimeout(() => {
            preloader.classList.add("hidden");
        }, 1500);
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
            });
        });
    }

    // Dark Mode Toggle
    const themeBtn = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeBtn) themeBtn.innerHTML = "☀️";
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            themeBtn.innerHTML = isDark ? "☀️" : "🌙";
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }

    // Typed.js
    if (typeof Typed !== "undefined") {
        new Typed("#typing", {
            strings: [
                "Frontend Developer",
                "Building Clean UIs",
                "Next.js & TypeScript",
                "Design Systems Enthusiast",
                "Open for Opportunities"
            ],
            typeSpeed: 45,
            backSpeed: 25,
            backDelay: 2200,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
    }

    // AOS Animation
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            once: true,
            offset: 80,
            easing: "ease-out-cubic"
        });
    }

    // Scroll to Top
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // EmailJS Contact Form
    if (typeof emailjs !== "undefined") {
        emailjs.init({
            publicKey: "471n1L6oQXyzWnIgQ"
        });

        const contactForm = document.getElementById("contact-form");
        const sendBtn = document.getElementById("send-btn");

        if (contactForm && sendBtn) {
            contactForm.addEventListener("submit", function (e) {
                e.preventDefault();

                sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                sendBtn.disabled = true;

                emailjs
                    .sendForm("service_wk102bd", "template_flgbcq8", this)
                    .then(function () {
                        alert("✅ Thank you! Your message has been sent successfully.");
                        contactForm.reset();
                        sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                        sendBtn.disabled = false;
                    })
                    .catch(function (error) {
                        console.error(error);
                        alert("❌ Something went wrong. Please try again or email me directly.");
                        sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                        sendBtn.disabled = false;
                    });
            });
        }
    }

    // Active nav link on scroll
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("href") === "#" + current) {
                item.classList.add("active");
            }
        });
    });
});
