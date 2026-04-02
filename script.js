// Select elements
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".panel");
const revealElements = document.querySelectorAll(".reveal");

// Function to set active nav link
function setActiveLink(id) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.target === id);
  });
}

// Smooth scroll to section on nav link click
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default jump
    const targetSection = document.getElementById(link.dataset.target);
    targetSection.scrollIntoView({
      behavior: "smooth", // Smooth scroll
      block: "center"     // Section comes to middle of viewport
    });
    setActiveLink(link.dataset.target);
  });
});

// Highlight nav link when section is in view
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  { threshold: 0.5 } // triggers when ~50% of section is visible
);

sections.forEach((section) => sectionObserver.observe(section));

// Reveal elements on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 } // triggers when 15% of element is visible
);

revealElements.forEach((el) => revealObserver.observe(el));