export function initScrollObserver() {
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const observeElements = () => {
    const elements = document.querySelectorAll('.fade-in-on-scroll:not(.is-visible)');
    elements.forEach(el => observer.observe(el));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
  } else {
    observeElements();
  }

  // Observe dynamically appended web component elements after small delay
  setTimeout(observeElements, 300);
}
