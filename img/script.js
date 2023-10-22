// Efecto de aparición dinámica al cargar la página
window.addEventListener('load', () => {
    const inicio = document.querySelector('#inicio');
    inicio.style.opacity = 1;
    inicio.style.transform = 'translateY(0)';
  
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.transform = 'scale(1)';
      }, 300 * (index + 1));
    });
  });


  // Agrega este código JavaScript
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('fixed-top-nav', 'scrolled');
  } else {
    navbar.classList.remove('fixed-top-nav', 'scrolled');
  }
});
