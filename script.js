// -----------------------------
// DARK MODE TOGGLE
// -----------------------------

const toggle = document.getElementById("darkModeToggle");

if (toggle) {

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {

    if (toggle.checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  });

}


// -----------------------------
// SMOOTH SCROLL
// -----------------------------

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", function(e) {

    const targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {

      e.preventDefault();

      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    }

  });

});


// -----------------------------
// HERO BUTTON SCROLL (INDEX ONLY)
// -----------------------------

const heroButton = document.querySelector(".primary-btn");

if (heroButton) {

  heroButton.addEventListener("click", () => {

    const projects = document.querySelector("#projects");

    if (projects) {
      projects.scrollIntoView({ behavior: "smooth" });
    }

  });

}


// -----------------------------
// SCROLL REVEAL (IMPROVED)
// -----------------------------

const sections = document.querySelectorAll(".section");

if (sections.length > 0) {

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("revealed");

        // stop observing after reveal (prevents repeated animations)
        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -80px 0px"
  });

  sections.forEach(section => observer.observe(section));

}


// -----------------------------
// SCROLL PROGRESS BAR (SMOOTHER)
// -----------------------------

const progressBar = document.querySelector(".progress-bar");

if (progressBar) {

  let ticking = false;

  function updateProgress() {

    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

    ticking = false;
  }

  window.addEventListener("scroll", () => {

    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }

  });

}


// -----------------------------
// CONTACT FORM (FORM SPREE)
// -----------------------------

const form = document.getElementById("contact-form");

if (form) {

  form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = new FormData(form);

    try {

      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        window.location.href = "thankyou.html";
      } else {
        alert("Something went wrong. Please try again.");
      }

    } catch (error) {
      alert("Network error. Please try again.");
    }

  });

}