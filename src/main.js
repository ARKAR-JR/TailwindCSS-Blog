




const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  //  Scroll Reveal

  ScrollReveal().reveal('.headline', {
    delay: 300,
    origin: 'bottom',
    distance: '20px',
    interval: 300,
    scale: 0.85,
    reset: true
  });