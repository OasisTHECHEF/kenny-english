// Add or remove 'scrolled' class based on scroll position
window.addEventListener("scroll", function () {
  const body = document.querySelector("body");
  if (window.scrollY > 50) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
});


// Anchor Links
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");

  // Function to get the exact height of the fixed header
  function getHeaderHeight() {
    return header ? header.offsetHeight : 0;
  }

  // Function to scroll to a target element with proper alignment
  function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = getHeaderHeight();
      const computedStyle = window.getComputedStyle(targetElement);
      const marginTop = parseInt(computedStyle.marginTop) || 0; // Adjust for CSS margin
      const targetPosition = targetElement.offsetTop - headerHeight - marginTop;

      // Scroll to the calculated position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Use smooth scrolling
      });
    }
  }

  // Add event listeners to anchor links
  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      const [targetPage, targetId] = href.split("#");

      if (targetId) {
        e.preventDefault(); // Prevent default jump

        if (!targetPage || targetPage === window.location.pathname.split("/").pop()) {
          // Same-page navigation
          history.pushState(null, null, `#${targetId}`);
          scrollToTarget(targetId);
        } else {
          // Cross-page navigation
          window.location.href = `${targetPage}#${targetId}`;
        }
      }
    });
  });

  // Scroll to target on page load if a hash is present
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    setTimeout(() => {
      scrollToTarget(targetId);
    }, 50); // Slight delay for rendering
  }
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


document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.slide-in');
    console.log('Animated elements:', animatedElements);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log('Intersecting:', entry.target, entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: Stop observing once visible
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
