const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assets/resume.pdf";
    link.download = "assets/resume.pdf";
    link.click();
});