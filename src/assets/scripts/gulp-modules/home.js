const swiper = new Swiper('.mynews-swiper', {
  slidesPerView: 1.3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    575: {
      spaceBetween: 30,
      slidesPerView: 1.2,
    },
    992: {
      spaceBetween: 40,
      slidesPerView: 1.7,
    },
    1440: {
      spaceBetween: 60,
      slidesPerView: 2.6,
    },
  },
});

const swiper2 = new Swiper('.mygallery-swiper', {
  // slidesPerView: 1.7,
  spaceBetween: 20,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    575: {
      spaceBetween: 30,
    },
    992: {
      spaceBetween: 40,
    },
    1440: {
      spaceBetween: 60,
    },
  },
});
