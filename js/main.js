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