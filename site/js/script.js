document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const heroCarousel = document.getElementById('heroCarousel');
if (heroCarousel) {
  const slides = heroCarousel.querySelectorAll('.hero-carousel-slide');
  const dots = heroCarousel.querySelectorAll('.hero-carousel-dots button');
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  function startAutoplay() {
    timer = setInterval(next, 3500);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goTo(index);
      clearInterval(timer);
      startAutoplay();
    });
  });

  startAutoplay();
}
