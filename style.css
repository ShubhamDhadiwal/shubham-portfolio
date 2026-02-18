// Loading screen
window.addEventListener('load', () => {
  const loader = document.getElementById('loadingScreen');
  loader.style.display = 'none';
});

// Dark mode toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Scroll animations
const animateElements = document.querySelectorAll('.animate-left, .animate-right, .animate-bottom');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('fade-in'); }
  });
}, { threshold: 0.2 });
animateElements.forEach(el => observer.observe(el));
