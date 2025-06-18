export function footer() {
  // Apply animation delays to footer sections
  document.addEventListener("DOMContentLoaded", () => {
    const footerSections = document.querySelectorAll(".footer-section");

    footerSections.forEach((section) => {
      const delay = section.getAttribute("data-delay");
      if (delay) {
        section.style.animationDelay = `${delay}s`;
      }
    });
  });
}


export function gallery() {
  // Apply animation delays to gallery items and view more section
  document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const viewMoreSection = document.querySelector(".view-more-section");

    galleryItems.forEach((item) => {
      const delay = item.getAttribute("data-delay");
      if (delay) {
        item.style.animationDelay = `${delay}s`;
      }
    });

    if (viewMoreSection) {
      viewMoreSection.style.animationDelay = "1s";
    }
  });
}

export function layout_1 () {
  // Smooth scrolling for anchor links
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  });
}