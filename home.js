// Toggle dropdown
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("menuDropdown").classList.toggle("hidden");
});

// Toggle dark/light theme
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.getElementById("menuDropdown").classList.toggle("dark");
  document.querySelector(".modal-content")?.classList.toggle("dark");
}

// Open/close modal
function openPrivacyModal() {
  document.getElementById("privacyModal").classList.remove("hidden");
}
function closePrivacyModal() {
  document.getElementById("privacyModal").classList.add("hidden");
}
