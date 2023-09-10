// Menggunakan JavaScript untuk memuat dan menyertakan komponen header dan footer
window.addEventListener("DOMContentLoaded", function () {
  const headerPlaceholder = document.getElementById("header-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");
  fetch("/components/header.html")
    .then((response) => response.text())
    .then((headerHtml) => {
      headerPlaceholder.innerHTML = headerHtml;
      fetch("/components/footer.html")
        .then((response) => response.text())
        .then((footerHtml) => {
          footerPlaceholder.innerHTML = footerHtml;

          // Menjalankan skrip dropdown setelah menyertakan komponen header dan footer
          const dropdownScript = document.createElement("script");
          dropdownScript.src = "/script/dropdown.js";
          document.body.appendChild(dropdownScript);
        });
    });
});
