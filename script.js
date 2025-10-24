const menu = document.getElementById("menu");
const nav = document.querySelector("header nav");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("open");
});

// Animate skill bars on scroll
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".skill-progress");
      progressBars.forEach((bar) => {
        const progress = bar.getAttribute("data-progress");
        bar.style.width = progress + "%";
      });
    }
  });
}, observerOptions);

const skillsSection = document.querySelector(".skills");
if (skillsSection) {
  observer.observe(skillsSection);
}

// Portfolio Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    portfolioItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        }, 10);
      } else {
        item.style.opacity = "0";
        item.style.transform = "scale(0.8)";
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });
  });
});
