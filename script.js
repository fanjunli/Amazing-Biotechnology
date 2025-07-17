// script.js

// Add dark mode toggle (optional)
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Add a button to toggle dark mode
const button = document.createElement("button");
button.textContent = "Toggle Dark Mode";
button.style.margin = "20px 0";
button.onclick = toggleDarkMode;

document.body.insertBefore(button, document.body.firstChild);
