const swiper = new Swiper('.mynews-swiper', {
  slidesPerView: 2.7,
  spaceBetween: 60,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.mygallery-swiper', {
  slidesPerView: 1.7,
  spaceBetween: 60,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

// const swiper = new Swiper('.myworks-swiper', {
//   slidesPerView: 2.5,
//   spaceBetween: 15,
//   slidesPerView: 'auto',
//   breakpoints: {
//     575: {
//       spaceBetween: 20,
//     },
//     992: {
//       spaceBetween: 50,
//     },
//     1440: {
//       spaceBetween: 60,
//     },
//   },
// });
