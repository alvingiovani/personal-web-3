const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden");
});
