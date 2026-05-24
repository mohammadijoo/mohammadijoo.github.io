// Portfolio interaction logic:
// 1. Mobile/tablet sidebar toggle
// 2. Close sidebar after clicking a navigation link
// 3. Active section highlighting while scrolling
// 4. Progress-bar animation
// 5. Back-to-top button

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  const sections = document.querySelectorAll("main section[id]");
  const progressBars = document.querySelectorAll(".progress-bar");
  const backToTop = document.getElementById("backToTop");

  function openSidebar() {
    if (!sidebar || !sidebarOverlay || !menuToggle) return;

    sidebar.classList.add("is-open");
    sidebarOverlay.classList.add("is-visible");
    menuToggle.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    if (!sidebar || !sidebarOverlay || !menuToggle) return;

    sidebar.classList.remove("is-open");
    sidebarOverlay.classList.remove("is-visible");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function toggleSidebar() {
    if (!sidebar) return;

    if (sidebar.classList.contains("is-open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebar);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });

  // Active sidebar link while scrolling
function updateActiveNavLink() {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    /*
      180px offset means:
      activate the section when the user has scrolled near its top.
      Increase/decrease this value if needed.
    */
    if (window.scrollY >= sectionTop - 180) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    const linkTarget = link.getAttribute("href");

    link.classList.toggle(
      "active",
      linkTarget === `#${currentSectionId}`
    );
  });
}

window.addEventListener("scroll", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);

  // Helper: get progress percentage from data-progress, title, or aria-valuenow
  function getProgressValue(bar) {
    const dataProgress = bar.getAttribute("data-progress");

    const tooltipValue = bar
      .querySelector(".popOver")
      ?.getAttribute("title")
      ?.replace("%", "")
      ?.trim();

    const ariaValue = bar.getAttribute("aria-valuenow");

    let value = dataProgress || tooltipValue || ariaValue || "0";

    value = parseFloat(value);

    if (Number.isNaN(value)) {
      value = 0;
    }

    value = Math.max(0, Math.min(value, 100));

    return value;
  }

  // Initialize all progress bars at zero
  progressBars.forEach((bar) => {
    bar.style.width = "0%";
  });

  // Animate each progress bar when the individual bar becomes visible
  if ("IntersectionObserver" in window) {
    const progressObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const bar = entry.target;
          const value = getProgressValue(bar);

          bar.style.width = `${value}%`;

          observer.unobserve(bar);
        });
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    progressBars.forEach((bar) => {
      progressObserver.observe(bar);
    });
  } else {
    // Fallback for old browsers
    progressBars.forEach((bar) => {
      const value = getProgressValue(bar);
      bar.style.width = `${value}%`;
    });
  }

  // Back to top
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Close sidebar with Escape key
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });
});