// Simple scroll animation on load
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
  });

  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.style.transition = "all 0.6s ease";
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  });
});
