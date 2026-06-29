// Orderfy — sub-nav active section + carousel pagination dots.

// Highlight the sub-nav link for the section currently in view.
(function () {
  const links = Array.from(document.querySelectorAll('.subnav-links a'));
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute('href').replace('#', '');
    const el = id === 'top' ? document.body : document.getElementById(id);
    if (el) map.set(el, a);
  });

  if ('IntersectionObserver' in window && map.size) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove('is-active'));
            map.get(e.target)?.classList.add('is-active');
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    map.forEach((_, el) => io.observe(el));
  }
})();

// Sync carousel pagination dots to the scrolled slide.
(function () {
  const carousel = document.querySelector('.carousel');
  const dots = Array.from(document.querySelectorAll('.dots .dot'));
  if (!carousel || !dots.length) return;
  const slides = Array.from(carousel.querySelectorAll('.slide'));

  carousel.addEventListener(
    'scroll',
    () => {
      const center = carousel.scrollLeft + carousel.clientWidth / 2;
      let active = 0;
      slides.forEach((s, i) => {
        if (s.offsetLeft <= center) active = i;
      });
      dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
    },
    { passive: true }
  );
})();
