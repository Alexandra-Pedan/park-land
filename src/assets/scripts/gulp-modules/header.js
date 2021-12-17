// $(window).resize(() => {
//   window.locoScroll.update();
//   document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
// });
// document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
// const header = document.querySelector('.header-js');
// console.log(header);

// function handleVisibilityOnScroll(elems = [], direction = 'up') {
//   elems.forEach(elem => {
//     switch (direction) {
//       case 'down':
//         elem[0].classList.add(elem[1]);
//         break;
//       default:
//         elem[0].classList.remove(elem[1]);
//         break;
//     }
//   });
// }
// locoScroll.on('scroll', position => {
//   if (position.scroll.y > 50) {
//     handleVisibilityOnScroll([[header, 'not-on-top']], 'down');
//   } else {
//     handleVisibilityOnScroll([[header, 'not-on-top']]);
//   }
// });
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
});

function initHeader() {
  const menuContainer = document.querySelector('.js-menu-container');
  const menuClose = document.querySelector('.js-menu-close');
  const menuOpen = document.querySelector('.js-menu-open');
  menuOpen.addEventListener('click', () => {
    if (menuContainer.classList.contains('active')) return;
    document.querySelector('body').style.overflow = 'hidden';
    menuContainer.classList.add('active');
  });

  menuClose.addEventListener('click', () => {
    if (!menuContainer.classList.contains('active')) return;
    menuContainer.classList.remove('active');
    document.querySelector('body').style.overflow = 'auto';
  });

  // Mobile phone menu start
  const btnCallMobile = document.querySelectorAll('.js-mobile-call');
  const btnCloseMobile = document.querySelector('.js-mobile-close');
  const formMobile = document.querySelector('.form-header-call');
  const formCallMobile = document.querySelector('.js-mobile-form');
  formCallMobile.addEventListener('click', () => {
    formCall.classList.add('sideform-active');
    document.querySelector('body').style.overflow = 'hidden';
  });

  btnCallMobile.forEach(el => el.addEventListener('click', () => {
    formMobile.classList.toggle('sideform-active');
    document.querySelector('body').style.overflow = 'hidden';
  }));

  btnCloseMobile.addEventListener('click', () => {
    formMobile.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
    formGratitude.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
  });
  formMobile.addEventListener('click', onBackdropClick);
  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      formMobile.classList.remove('sideform-active');
      document.querySelector('body').style.overflow = 'auto';
    }
  }
  // Mobile phone menu end

  const btnCallMenu = document.querySelectorAll('.js-call');
  const btnClose = document.querySelectorAll('.js-close');
  const formCall = document.querySelector('.sideform');
  const formGratitude = document.querySelector('.form-gratitude');
  const btnForm = document.querySelectorAll('form-button-js');

  btnCallMenu.forEach(el => el.addEventListener('click', () => {
    formCall.classList.toggle('sideform-active');
    document.querySelector('body').style.overflow = 'hidden';
  }));

  btnClose.forEach(el => el.addEventListener('click', () => {
    formCall.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
  }));
  btnClose.forEach(el => el.addEventListener('click', () => {
    formGratitude.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
  }));
  btnForm.forEach(el => el.addEventListener('click', () => {
    formGratitude.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
  }));

  document.querySelector('.js-menu-main').addEventListener('click', ({ target }) => {
    if (target.tagName === 'a') {
      return;
    }
    menuClose.click();
  });
}
