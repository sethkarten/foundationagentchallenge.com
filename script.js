const body = document.body;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

navToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

/* --- Mascot head morph -------------------------------------------------------
   On scroll, a floating copy of the head "lifts off" the hero mascot and flies
   into the header slot (and back on scroll up). It fades in as it travels, so
   the rough alignment at the very start is invisible, and it docks onto the
   header head's real, measured position. The static header head is hidden while
   this is active; without JS / with reduced motion it just stays visible. */
const headerHead = document.querySelector(".brand img");
const heroMascot = document.querySelector(".hero-mascot img");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function initMascotMorph() {
  if (!headerHead || !heroMascot || reduceMotion.matches) return;

  document.documentElement.classList.add("js-morph");

  const clone = document.createElement("img");
  clone.src = headerHead.currentSrc || headerHead.src;
  clone.alt = "";
  clone.setAttribute("aria-hidden", "true");
  clone.className = "morph-mascot";
  body.appendChild(clone);

  const DIST = 300; // scroll distance (px) over which the head travels
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeInOut = (t) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  let ticking = false;

  function render() {
    ticking = false;
    const p = Math.min(Math.max(window.scrollY / DIST, 0), 1);
    const ep = easeInOut(p);

    const end = headerHead.getBoundingClientRect();
    const hero = heroMascot.getBoundingClientRect();

    // Head region within the full-body hero mascot (measured from the PNG:
    // head centre ~47% across, ~32% down, ~30% of the image box tall).
    const startH = hero.height * 0.3;
    const startCX = hero.left + hero.width * 0.44;
    const startCY = hero.top + hero.height * 0.25;
    const endCX = end.left + end.width / 2;
    const endCY = end.top + end.height / 2;

    const cx = lerp(startCX, endCX, ep);
    const cy = lerp(startCY, endCY, ep);
    const scale = lerp(startH / end.height, 1, ep);

    const tx = cx - (end.width * scale) / 2;
    const ty = cy - (end.height * scale) / 2;

    clone.style.width = end.width + "px";
    clone.style.height = end.height + "px";
    clone.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    // Stay invisible for the first half of the flight, then fade in over the
    // back half so the appearance happens near the header.
    clone.style.opacity = Math.min(Math.max((p - 0.5) / 0.4, 0), 1);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(render);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", render);
  render();
}

initMascotMorph();
