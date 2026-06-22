// Toggle a light header style once the user scrolls past the hero.
(function () {
  const header = document.getElementById('header');
  const hero = document.getElementById('hero');
  if (!header || !hero) return;

  const onScroll = () => {
    const threshold = hero.offsetHeight - 80;
    header.classList.toggle('scrolled', window.scrollY > threshold);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
