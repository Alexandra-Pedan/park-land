const swiper = new Swiper('.mynews-swiper', {
  slidesPerView: 2.6,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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

const swiper2 = new Swiper('.mygallery-swiper', {
  slidesPerView: 1.7,
  spaceBetween: 20,
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
