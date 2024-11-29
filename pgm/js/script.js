
// Add or remove 'scrolled' class based on scroll position
window.addEventListener("scroll", function () {
  const body = document.querySelector("body");
  if (window.scrollY > 50) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
});
