const swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    touchStartPreventDefault: false,
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
function addZero(num) {
  return num > 9 ? num : `0${num}`;
}

// /** СТрелка переключатель в зависимости от положения на єкране */

// function sideSwitchArrow(swiper, arrow, container) {
//   const mediumCordValue = document.documentElement.clientWidth / 2;
//   document.body.append(arrow);
//   container.style.cursor = 'none';
//   arrow.style.cursor = 'none';
//   arrow.style.zIndex = 100;
//   arrow.__proto__.hide = function () {
//     this.style.opacity = '0';
//     this.style.pointerEvents = 'none';
//   };
//   arrow.__proto__.show = function () {
//     this.style.opacity = '1';
//     // this.style.pointerEvents = 'auto';
//   };
//   arrow.dataset.side = 'leftSide';

//   console.log(container);
//   container.addEventListener('mousemove', desktopNavButtonHandler);
//   container.addEventListener('mouseenter', () => {
//     arrow.show();
//   });
//   container.addEventListener('mouseleave', () => {
//     arrow.hide();
//   });
//   if (document.documentElement.clientWidth < 769) {
//     window.removeEventListener('mousemove', desktopNavButtonHandler);
//     arrow.remove();
//   }

//   /** Записывает координаты обьекта, на котором нужно скрыть стрелку переключения слайдера */
//   /** ms ---> main-screen */

//   function desktopNavButtonHandler(evt) {
//     console.log(arrow);
//     // arrow.style.position = 'fixed';
//     arrow.style.left = `${evt.clientX - 18}px`;
//     arrow.style.top = `${evt.clientY - 18}px`;

//     getCursorSide(evt.clientX);
//     handleArrowVisibility(evt);
//   }

//   function handleArrowVisibility() {}

//   function getCursorSide(x) {
//     if (x < mediumCordValue) {
//       arrow.classList.add('left-side');
//       arrow.dataset.side = 'leftSide';
//       // switchGallerySlide('leftSide');
//     } else {
//       arrow.classList.remove('left-side');
//       arrow.dataset.side = 'rightSide';
//       // switchGallerySlide('rightSide')
//     }
//   }
//   container.addEventListener('click', () => {
//     switchGallerySlide(arrow.dataset.side);
//   });
//   if (document.documentElement.clientWidth < 576) {
//     container.removeEventListener('click', clickToChange);
//   }
//   const navigate = {
//     leftSide: () => {
//       swiper.slidePrev();
//     },
//     rightSide: () => {
//       swiper.slideNext();
//     },
//   };

//   function switchGallerySlide(side) {
//     navigate[side]();
//     return navigate.side;
//   }

//   // eslint-disable-next-line no-unused-vars
// }
// sideSwitchArrow(
//   swiper,
//   document.querySelector('.btn-gallery'),
//   document.querySelector('.js-swiper'),
// );
// /** СТрелка переключатель в зависимости от положения на єкране END */
function initSliderCursor(cursor, swiper, container) {
  const centerScreenPos = document.documentElement.clientWidth / 2;
  const showCursor = (el) => {
    el.dataset.visibility = 'show';
    // el.style.transform = 'translate(-50%, -50%)scale(1)';
  };
  const hideCursor = (el) => {
    el.dataset.visibility = 'hide';
    // el.style.transform = 'translate(-50%, -50%)scale(0)';
  };
  container.addEventListener('mousemove', (event) => {
    if (event.clientX < window.innerWidth / 2) {
      cursor.dataset.direction = 'left';
    } else {
      cursor.dataset.direction = 'right';
    }
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
  container.addEventListener('mouseenter', () => {
    showCursor(cursor);
  });
  container.addEventListener('mouseleave', () => {
    hideCursor(cursor);
  });

  container.addEventListener('click', (event) => {
    if (centerScreenPos > event.clientX) {
      swiper.slidePrev();
      return;
    }
    swiper.slideNext();
  });
}

// const cursorHtml = `<svg class="icon--btn-gallery js-cursor-slider" role="presentation">
//   <use xlink:href="#btn-gallery"></use>
// </svg>`;
const cursorHtml = `<svg class="icon--btn-gallery js-cursor-slider"viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="55" cy="55" r="55" fill="#79B43E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M63.9386 56.3497L42 56.3497L42 53.6503L63.9386 53.6503L55.3253 44.9547L57.0815 43L68 54.0226L68 55.9774L57.0815 67L55.3253 65.0452L63.9386 56.3497Z" fill="#F0F0F0"/>
</svg>`;
document.body.insertAdjacentHTML('beforeend', cursorHtml);
const cursor = document.querySelector('.js-cursor-slider');

const sliderCursor = (swiper, container) => initSliderCursor(cursor, swiper, container);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.mySwiper');
  if (!container || !sliderCursor) return;
  sliderCursor(swiper, container);
});
