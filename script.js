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