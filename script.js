/* ===== CUSTOM CURSOR ===== */
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

if (dot && ring && matchMedia("(pointer: fine)").matches) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll(".interactive, a, button").forEach(el => {
    el.addEventListener("mouseenter", () => {
      ring.style.width = "52px";
      ring.style.height = "52px";
      ring.style.borderColor = "rgba(217,164,65,.85)";
    });
    el.addEventListener("mouseleave", () => {
      ring.style.width = "38px";
      ring.style.height = "38px";
      ring.style.borderColor = "rgba(255,255,255,.5)";
    });
  });
}

/* ===== MOBILE NAV TOGGLE ===== */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
