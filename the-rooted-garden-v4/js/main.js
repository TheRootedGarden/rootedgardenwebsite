/* =============================================================
   THE ROOTED GARDEN — Site scripts
   ---------------------------------------------------------------
   The ONLY part of this file you need to touch is the
   GOOGLE_FORMS object right below. Everything else just makes
   the page work (menu, scroll animations, embedding your form).
   ============================================================= */

// ---------------------------------------------------------------
// GOOGLE FORM LINK — paste your B2B / wholesale inquiry form here
// ---------------------------------------------------------------
// How to get the URL:
//   1. Open your form at forms.google.com
//   2. Click "Send" (top right)
//   3. Click the "<>" embed icon
//   4. Copy just the URL inside src="..." from the code shown
//   5. Paste it between the quotes below
//
// It will look like:
// https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxxxxxx/viewform?embedded=true
//
// Leave it as "" (empty quotes) to keep showing the placeholder
// box on the live site until you're ready. Want a second form
// later (e.g. a separate general-contact form)? Add another line
// here like `contact: "",` and give the matching HTML block a
// `data-google-form="contact"` attribute.
const GOOGLE_FORMS = {
  b2b: "https://docs.google.com/forms/d/e/1FAIpQLSdKvv1EO3T0yMcpX_z-y9h8cZQ1krkCb51MB3cxfQGGT0gSbw/viewform?embedded=true", // Wholesale / B2B inquiry form
};

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  initNavToggle();
  mountFormEmbeds();
  initScrollReveal();
  initTimelineDraw();
  initHeaderScrollShadow();
});

// Keeps the footer copyright year current automatically.
function setFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

// Mobile hamburger menu.
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const list = document.querySelector(".nav-links");
  if (!toggle || !list) return;

  toggle.addEventListener("click", () => {
    const isOpen = list.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  list.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      list.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      list.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Finds every [data-google-form] container on the page and, if a
// URL has been added above, swaps the placeholder for a live
// embedded Google Form (with a working "open in new tab" link).
function mountFormEmbeds() {
  document.querySelectorAll("[data-google-form]").forEach((wrapper) => {
    const key = wrapper.getAttribute("data-google-form");
    const url = GOOGLE_FORMS[key];
    const frameWrap = wrapper.querySelector(".form-frame-wrap");
    const openLink = wrapper.querySelector(".form-open-link");

    if (url) {
      if (frameWrap) {
        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.loading = "lazy";
        iframe.title = wrapper.getAttribute("data-form-title") || "Google Form";
        frameWrap.appendChild(iframe);
      }

      wrapper.classList.remove("ghost-block");
      wrapper.classList.add("form-ready");

      if (openLink) {
        openLink.href = url.replace("?embedded=true", "").replace("&embedded=true", "");
        openLink.removeAttribute("aria-disabled");
      }
    }
  });
}

// Fades sections in as they scroll into view. Grid children
// (variety cards, timeline stages, founder cards) get a small
// staggered delay via CSS nth-child rules in style.css.
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

// Draws the red progress line through the grow-cycle timeline
// once it scrolls into view.
function initTimelineDraw() {
  const track = document.querySelector(".timeline-track");
  if (!track) return;

  if (!("IntersectionObserver" in window)) {
    track.classList.add("is-drawn");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          track.classList.add("is-drawn");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(track);
}

// Adds a subtle shadow under the sticky header once the page has
// scrolled, for a bit of extra polish.
function initHeaderScrollShadow() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
