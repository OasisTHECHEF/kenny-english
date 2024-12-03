
// Add or remove 'scrolled' class based on scroll position
window.addEventListener("scroll", function () {
  const body = document.querySelector("body");
  if (window.scrollY > 50) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]'); // Select all anchor links
  const header = document.getElementById("header"); // Fixed header

  links.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent default jump

          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const headerHeight = header.offsetHeight || 0;

              // Fine-tuned adjustment for #pg-2
              const additionalOffset = targetId === "pg-2" ? 2 : 0; // Adjust incrementally

              const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - headerHeight - additionalOffset;

              // Smooth scroll to calculated position
              window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
              });
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('.animated');

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              } else {
                  entry.target.classList.remove('visible');
              }
          });
      },
      {
          threshold: 0.1,
      }
  );

  animatedElements.forEach((el) => observer.observe(el));
});




document.addEventListener("DOMContentLoaded", function () {
  const pg3Section = document.querySelector('.pg-3');
  if (!pg3Section) {
      console.error('pg-3 section not found');
      return;
  }

  const slideInElements = pg3Section.querySelectorAll('.slide-in');
  if (slideInElements.length === 0) {
      console.error('No slide-in elements found in pg-3 section');
      return;
  }

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              console.log('Element observed:', entry.target, 'Is intersecting:', entry.isIntersecting);
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              } else {
                  entry.target.classList.remove('visible');
              }
          });
      },
      {
          threshold: 0.2,
      }
  );

  slideInElements.forEach((el) => observer.observe(el));
});



