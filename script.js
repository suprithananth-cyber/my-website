const scrollLinks = document.querySelectorAll('[data-scroll], .main-nav a');
const animatedBlocks = document.querySelectorAll('[data-animate]');
const footerYear = document.getElementById('year');

const smoothScroll = (target) => {
  const block = document.querySelector(target);
  if (!block) return;

  block.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

scrollLinks.forEach((link) => {
  const target = link.dataset.scroll || link.getAttribute('href');

  link.addEventListener('click', (event) => {
    if (!target || !target.startsWith('#')) return;
    event.preventDefault();
    smoothScroll(target);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

animatedBlocks.forEach((block) => observer.observe(block));

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');

    alert(`Thanks, ${name || 'friend'}! We'll be in touch soon.`);
    contactForm.reset();
  });
}
