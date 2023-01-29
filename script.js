const hiddenElements = document.getElementsByClassName("hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

Array.from(hiddenElements).forEach((element) => {
  observer.observe(element);
});

function copyToClipboard(str) {
  // Get the text field

  // Copy the text inside the text field
  navigator.clipboard.writeText(str);

  // Alert the copied text
  alert(str + " Wurde in deine Zwischenablage gespeichert");
}

// Mouse animation
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".mouse-animation-circle");

const colors = [
  "#56070c",
  "#56070c",
  "#56070c",
  "#7b2521",
  "#883028",
  "#943a2f",
  "#a04536",
  "#ac503c",
  "#b95b43",
  "#c5674a",
  "#d17351",
  "#dd7e57",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
