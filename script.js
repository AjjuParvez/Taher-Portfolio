// ✅ Show only selected section
function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");

    const section = document.querySelector(id);
    if (section) {
        section.style.display = "block";
        document.body.style.overflow = "auto"; // enable scroll only after user navigates
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// ✅ On page load → show ONLY Home + disable scroll
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
    document.querySelector("#home").style.display = "flex";
    document.body.style.overflow = "hidden"; // ✅ disable scroll on home
});

// ✅ Navbar click behavior
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("href");

        // ✅ If user clicks home → lock scroll again
        if (id === "#home") {
            document.body.style.overflow = "hidden";
        }

        showSection(id);
    });
});

// ✅ Learn More → About
document.querySelectorAll(".learn-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        document.body.style.overflow = "auto"; // allow scrolling
        showSection("#about");
    });
});
