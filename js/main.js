// Portfolio interaction logic:
// 1. Project-card content enhancements
// 2. Mobile/tablet sidebar toggle
// 3. Close sidebar after clicking a navigation link
// 4. Active section highlighting while scrolling
// 5. Progress-bar animation
// 6. Back-to-top button

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  const sections = document.querySelectorAll("main section[id]");
  const progressBars = document.querySelectorAll(".progress-bar");
  const backToTop = document.getElementById("backToTop");

  // Projects: feature the three academies first and consolidate the
  // multi-language repositories into their current unified repositories.
  const projectGrid = document.querySelector("#projects .project-grid");

  if (projectGrid) {
    const academyProjects = [
      {
        icon: "🤖",
        title: "CaaT Academy",
        description:
          "Free browser-native academy for control engineering, automation, and robotics, with structured courses, hands-on lessons, simulations, practical code, and engineering-focused learning paths.",
        url: "https://mohammadijoo.github.io/CaaT_Academy",
      },
      {
        icon: "♾️",
        title: "DevOps Academy",
        description:
          "Structured DevOps learning academy covering the delivery stack from Linux, Git, testing, and CI/CD through containers, Kubernetes, infrastructure automation, security, observability, and cloud platforms.",
        url: "https://mohammadijoo.github.io/DevOps_Academy",
      },
      {
        icon: "🗄️",
        title: "Big Data Academy",
        description:
          "Comprehensive data engineering academy covering relational and NoSQL databases, distributed systems, Hadoop and Spark, streaming, orchestration, lakehouse technologies, cloud data platforms, and analytics.",
        url: "https://mohammadijoo.github.io/Big_Data_Academy",
      },
    ];

    if (!projectGrid.querySelector("[data-academy-project]")) {
      const fragment = document.createDocumentFragment();

      academyProjects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.setAttribute("data-academy-project", project.title);

        const icon = document.createElement("div");
        icon.className = "project-icon";
        icon.textContent = project.icon;

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const link = document.createElement("a");
        link.href = project.url;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = "Open Academy";

        card.append(icon, title, description, link);
        fragment.appendChild(card);
      });

      projectGrid.prepend(fragment);
    }

    const consolidatedProjects = {
      "3D Robotic Manipulator Simulator": {
        description:
          "Unified 3D simulation project for a 3-DOF RRR robotic manipulator implemented in 9 programming languages. It demonstrates forward and inverse kinematics, interactive 3D visualization, robotics mathematics, and comparable implementation patterns across multiple programming ecosystems.",
        url: "https://github.com/mohammadijoo/Manipulator3D",
      },
      "Plotting Playground in Multiple Languages": {
        description:
          "Unified scientific and engineering plotting playground implemented in 9 programming languages, with reproducible visualization examples, practical charting workflows, and language-specific approaches collected in a single repository.",
        url: "https://github.com/mohammadijoo/Plotting_Playground",
      },
      "ODE & PDE Solvers in Multiple Languages": {
        description:
          "Unified numerical simulation collection implemented in 9 programming languages for ordinary and partial differential equations, including heat-equation simulation, nonlinear dynamics, inverted-pendulum control, numerical integration, plots, animations, and reproducible engineering outputs.",
        url: "https://github.com/mohammadijoo/ODE_PDE_Solvers",
      },
    };

    projectGrid.querySelectorAll(".project-card").forEach((card) => {
      const heading = card.querySelector("h3");
      if (!heading) return;

      const project = consolidatedProjects[heading.textContent.trim()];
      if (!project) return;

      const description = card.querySelector("p");
      if (description) {
        description.textContent = project.description;
      }

      const oldLinks = card.querySelector(".project-links");
      const repositoryLink = document.createElement("a");
      repositoryLink.href = project.url;
      repositoryLink.target = "_blank";
      repositoryLink.rel = "noopener";
      repositoryLink.textContent = "View Repository";

      if (oldLinks) {
        oldLinks.replaceWith(repositoryLink);
      } else {
        const existingLink = card.querySelector("a");
        if (existingLink) {
          existingLink.replaceWith(repositoryLink);
        } else {
          card.appendChild(repositoryLink);
        }
      }
    });
  }

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
  let lastActiveNavLink = null;

  function getSidebarScrollContainer(link) {
    let element = link?.parentElement;

    while (element && element !== document.body) {
      const styles = window.getComputedStyle(element);
      const canScrollVertically =
        /(auto|scroll|overlay)/.test(styles.overflowY) &&
        element.scrollHeight > element.clientHeight + 1;

      if (canScrollVertically) {
        return element;
      }

      if (element === sidebar) break;
      element = element.parentElement;
    }

    return sidebar;
  }

  function keepActiveNavLinkVisible(link) {
    if (!link || !sidebar) return;

    const scrollContainer = getSidebarScrollContainer(link);
    if (!scrollContainer || scrollContainer.scrollHeight <= scrollContainer.clientHeight) {
      return;
    }

    const linkRect = link.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    const safeGap = 20;
    const visibleTop = containerRect.top + safeGap;
    const visibleBottom = containerRect.bottom - safeGap;

    if (linkRect.top < visibleTop) {
      scrollContainer.scrollBy({
        top: linkRect.top - visibleTop,
        behavior: "smooth",
      });
    } else if (linkRect.bottom > visibleBottom) {
      scrollContainer.scrollBy({
        top: linkRect.bottom - visibleBottom,
        behavior: "smooth",
      });
    }
  }

  function updateActiveNavLink() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      /*
        180px offset means:
        activate the section when the user has scrolled near its top.
        Increase/decrease this value if needed.
      */
      if (window.scrollY >= sectionTop - 180) {
        currentSectionId = section.getAttribute("id");
      }
    });

    let activeLink = null;

    navLinks.forEach((link) => {
      const linkTarget = link.getAttribute("href");
      const isActive = linkTarget === `#${currentSectionId}`;

      link.classList.toggle("active", isActive);

      if (isActive) {
        activeLink = link;
      }
    });

    // Keep the newly active item inside the visible portion of the sidebar.
    // This scrolls the sidebar itself, never the main page.
    if (activeLink && activeLink !== lastActiveNavLink) {
      keepActiveNavLinkVisible(activeLink);
      lastActiveNavLink = activeLink;
    }
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

  // Language switcher: injected into the existing sidebar without removing
  // or rewriting any current index.html content.
  if (sidebar && !sidebar.querySelector(".language-switcher")) {
    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("aria-label", "Language switcher");

    const isPersian = /(?:^|\/)index-fa\.html(?:$|[?#])/.test(window.location.pathname + window.location.search + window.location.hash);

    switcher.innerHTML = `
      <a class="language-flag ${isPersian ? "" : "active"}" href="index.html" lang="en" hreflang="en" aria-label="English version" title="English"><span>EN</span></a>
      <a class="language-flag ${isPersian ? "active" : ""}" href="index-fa.html" lang="fa" hreflang="fa" aria-label="نسخه فارسی" title="فارسی"><span>FA</span></a>
    `;

    const profile = sidebar.querySelector(".profile");
    sidebar.insertBefore(switcher, profile || sidebar.firstChild);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("portfolio-language-switcher-style")) return;
  const style = document.createElement("style");
  style.id = "portfolio-language-switcher-style";
  style.textContent = `
    .language-switcher {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: -8px 0 18px;
      direction: ltr;
    }
    .language-flag {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      min-width: 64px;
      min-height: 36px;
      padding: 8px 12px;
      border: 1px solid rgba(255,255,255,.13);
      border-radius: 10px;
      background: rgba(255,255,255,.07);
      color: #dbe6f7;
      text-decoration: none;
      font: 650 .78rem/1 "Segoe UI", Inter, ui-sans-serif, system-ui, sans-serif;
      transition: background .2s ease, border-color .2s ease, transform .2s ease;
    }
    .language-flag:hover {
      background: rgba(255,255,255,.15);
      border-color: rgba(255,255,255,.28);
      transform: translateY(-1px);
    }
    .language-flag.active {
      background: rgba(96,165,250,.22);
      border-color: rgba(96,165,250,.65);
      color: #fff;
    }
    .language-flag span { font-size: .78rem; letter-spacing: .04em; }
  `;
  document.head.appendChild(style);
});
