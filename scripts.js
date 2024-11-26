// Animaciones para artículos al desplazarse
const articles = document.querySelectorAll('article');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.2 }
);

articles.forEach((article) => {
  article.style.opacity = '0';
  article.style.transform = 'translateY(50px)';
  article.style.transition = 'all 0.6s ease';
  observer.observe(article);
});

