// ✅ Hide all sections EXCEPT home on first load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
    document.querySelector("#home").style.display = "block";
});

// ✅ Show only selected section
function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
    if (document.querySelector(id)) {
        document.querySelector(id).style.display = "block";
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
}

// ✅ Navbar click behavior
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("href");
        showSection(id);
    });
});

// ✅ Learn More button
document.querySelectorAll(".learn-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        showSection("#about");
    });
});
