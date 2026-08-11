const dot = document.querySelector(".cursor-dot");
const circle = document.querySelector(".cursor-circle");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let circleX = mouseX;
let circleY = mouseY;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (dot) {
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  }
});

function animateCursor() {
  const speed = 0.13;

  circleX += (mouseX - circleX) * speed;
  circleY += (mouseY - circleY) * speed;

  if (circle) {
    circle.style.left = `${circleX}px`;
    circle.style.top = `${circleY}px`;
  }

  requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll("a, button").forEach(element => {
  element.addEventListener("mouseenter", () => {
    if (circle) {
      circle.style.width = "54px";
      circle.style.height = "54px";
      circle.style.borderColor = "rgba(232,107,61,.8)";
    }
  });

  element.addEventListener("mouseleave", () => {
    if (circle) {
      circle.style.width = "40px";
      circle.style.height = "40px";
      circle.style.borderColor = "rgba(232,107,61,.45)";
    }
  });
});
