///////////////////////////////////////////////////////////

/* Make mobile navigation work */
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header-container");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

/* Smooth scrolling animation */

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({
        behavior: "smooth",
      });
    }

    //Close mobile navigation
    if (link.classList.contains("nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

/* Sticky Navigation */
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
///////////////////////////////////////////////////////////
