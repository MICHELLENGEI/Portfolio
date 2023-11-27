let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scrolled");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".lazy-section").forEach(e => {
  observer.observe(e);
});
