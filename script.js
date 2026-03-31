// ✅ Show only selected section
function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
    const section = document.querySelector(id);
    if (section) {
        section.style.display = "block";
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// ✅ On page load → show ONLY Home section
document.addEventListener("DOMContentLoaded", () => {
    showSection("#home");
});

// ✅ Navbar click behavior
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("href");
        showSection(id);
    });
});

// ✅ Learn More → About
document.querySelectorAll(".learn-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        showSection("#about");
    });
});
