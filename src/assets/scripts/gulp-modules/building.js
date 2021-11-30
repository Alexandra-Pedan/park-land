var swiper = new Swiper('.buildingSwiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
});
function addZero(num) {
  return num > 9 ? num : '0' + num;
}

// const buildPopupActive = "build-popup-active";
// let slider = null;
// let sliderSmall = null;
// function getBuildData(id) {
//   // const data = {
//   //   id: '723',
//   //   month: 'Травень',
//   //   slider: [
//   //     'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/d542c09e-32bc-4bcf-bb6b-e56183f6bd65.jpg',
//   //     'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7693c189-52bf-48b8-a9b3-0463d9949933.jpg',
//   //     'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7c9de7df-bfd8-43de-b6b5-256e24a30ca9.jpg'
//   //   ],
//   //   date: {
//   //     d: '19',
//   //     m: '05',
//   //     y: '2021',
//   //   },
//   //   text: 'Проводиться демонтаж старого оздоблення, систем внутрішніх комунікацій та перегородок',
//   //   count: 3,
//   // };
//   // return new Promise((resolve, reject) => {
//   //   resolve(data);
//   // });
//   const data = new FormData();
//   data.append("action", "buildProgress");
//   data.append("id", id);
//   return fetch("/wp-admin/admin-ajax.php", {
//     method: "POST",
//     body: data,
//   });
// }

// function createBuildCard(build) {
//   return `<a class="building-progress-item-wrap js-build-card" href="#" data-build-id="${build.id}">
//     <div class="building-progress-item">
//       <div class="building-progress-img img-active">
//         <div class="img-active-container"><img src="${build.slider[0]}"></div></div>
//       <div class="building-progress-img img-2" style="background: linear-gradient(0deg, rgba(246, 246, 246, 0.3), rgba(246, 246, 246, 0.3)), url(${build.slider[1]})"></div>
//       <div class="building-progress-img img-3" style="background: linear-gradient(0deg, rgba(246, 246, 246, 0.6), rgba(246, 246, 246, 0.9)), url(${build.slider[2]})"></div>
//       <div class="building-progress-item-text">
//         <div class="date">${build.date.d}</div>
//         <hr class="building-progress-line">
//         <div class="month">${build.month}</div>
//         <div class="year">${build.date.y}</div>
//       </div>
//     </div>
//   </a>`;
// }

// function createBuilds(currentCount, builds, count = 10) {
//   const renderingBuilds = [];
//   for (let i = currentCount; i < currentCount + count; i += 1) {
//     renderingBuilds.push(createBuildCard(builds[i]));
//   }
//   return renderingBuilds.join("");
// }

// function loadMoreHandler(state, containers) {
//   const count =
//     state.countShowBuild + 10 < state.builds.length
//       ? 10
//       : state.builds.length - state.countShowBuild;
//   if (count < 10 || state.countShowBuild + 10 === state.builds.length) {
//     // eslint-disable-next-line no-param-reassign
//     containers.loadMore.style.display = "none";
//   }
//   const buildsHtml = createBuilds(state.countShowBuild, state.builds, count);
//   containers.buildContainer.insertAdjacentHTML("beforeend", buildsHtml);
// }

// function initBuildPopup(build, containers) {
//   containers.buildPopup.classList.add(buildPopupActive);
//   updateContentPopup(build, containers);
// }

// function buildContainerHandler(event, state, containers) {
//   const card = event.target.closest("a");
//   const isTouchCard = card.classList.contains("js-build-card");
//   const id = +card.dataset.buildId;
//   if (!isTouchCard || !id) return;
//   state.updateCurrentId(id);

//   const build = state.builds.filter((build) => build.id === id);
//   if (build.length === 0) return;
//   initBuildPopup(build[0], containers);
// }

// // function changeBuildContent(state, containers) {
// //   getBuildData(state.currentBuildId)
// //     .then(build => {
// //       console.log(build);
// //       updateContentPopup(build, containers);
// //     })
// //     .catch(error => {
// //       console.log(error);
// //       alert(error);
// //     });
// // }

// function closeHandler(containers) {
//   containers.buildPopup.classList.remove(buildPopupActive);
// }

// function nextBuildHandler(state, containers) {
//   const index = state.nextBuildId();
//   updateContentPopup(state.builds[index], containers);
// }

// function prevBuildHandler(state, containers) {
//   const index = state.prevBuildId();
//   updateContentPopup(state.builds[index], containers);
// }

// async function getBuilds() {
//   // return [
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '19',
//   //       m: '05',
//   //       y: '2021',
//   //     },
//   //     id: '723',
//   //     month: 'Травень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/d542c09e-32bc-4bcf-bb6b-e56183f6bd65.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7693c189-52bf-48b8-a9b3-0463d9949933.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7c9de7df-bfd8-43de-b6b5-256e24a30ca9.jpg',
//   //     ],
//   //     text:
//   //       'Проводиться демонтаж старого оздоблення, систем внутрішніх комунікацій та перегородок\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '17',
//   //       m: '03',
//   //       y: '2021',
//   //     },
//   //     id: '533',
//   //     month: 'Березень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0225-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //     ],
//   //     text: 'Проходить підготовка до основних будівельних робіт на майданчику.\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '19',
//   //       m: '05',
//   //       y: '2021',
//   //     },
//   //     id: '723',
//   //     month: 'Травень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/d542c09e-32bc-4bcf-bb6b-e56183f6bd65.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7693c189-52bf-48b8-a9b3-0463d9949933.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7c9de7df-bfd8-43de-b6b5-256e24a30ca9.jpg',
//   //     ],
//   //     text:
//   //       'Проводиться демонтаж старого оздоблення, систем внутрішніх комунікацій та перегородок\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '17',
//   //       m: '03',
//   //       y: '2021',
//   //     },
//   //     id: '533',
//   //     month: 'Березень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0225-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //     ],
//   //     text: 'Проходить підготовка до основних будівельних робіт на майданчику.\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '19',
//   //       m: '05',
//   //       y: '2021',
//   //     },
//   //     id: '723',
//   //     month: 'Травень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/d542c09e-32bc-4bcf-bb6b-e56183f6bd65.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7693c189-52bf-48b8-a9b3-0463d9949933.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7c9de7df-bfd8-43de-b6b5-256e24a30ca9.jpg',
//   //     ],
//   //     text:
//   //       'Проводиться демонтаж старого оздоблення, систем внутрішніх комунікацій та перегородок\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '17',
//   //       m: '03',
//   //       y: '2021',
//   //     },
//   //     id: '533',
//   //     month: 'Березень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0225-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //     ],
//   //     text: 'Проходить підготовка до основних будівельних робіт на майданчику.\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '19',
//   //       m: '05',
//   //       y: '2021',
//   //     },
//   //     id: '723',
//   //     month: 'Травень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/d542c09e-32bc-4bcf-bb6b-e56183f6bd65.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7693c189-52bf-48b8-a9b3-0463d9949933.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7c9de7df-bfd8-43de-b6b5-256e24a30ca9.jpg',
//   //     ],
//   //     text:
//   //       'Проводиться демонтаж старого оздоблення, систем внутрішніх комунікацій та перегородок\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '17',
//   //       m: '03',
//   //       y: '2021',
//   //     },
//   //     id: '533',
//   //     month: 'Березень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0225-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //     ],
//   //     text: 'Проходить підготовка до основних будівельних робіт на майданчику.\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '19',
//   //       m: '05',
//   //       y: '2021',
//   //     },
//   //     id: '723',
//   //     month: 'Травень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/d542c09e-32bc-4bcf-bb6b-e56183f6bd65.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7693c189-52bf-48b8-a9b3-0463d9949933.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7c9de7df-bfd8-43de-b6b5-256e24a30ca9.jpg',
//   //     ],
//   //     text:
//   //       'Проводиться демонтаж старого оздоблення, систем внутрішніх комунікацій та перегородок\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '17',
//   //       m: '03',
//   //       y: '2021',
//   //     },
//   //     id: '533',
//   //     month: 'Березень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0225-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //     ],
//   //     text: 'Проходить підготовка до основних будівельних робіт на майданчику.\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '19',
//   //       m: '05',
//   //       y: '2021',
//   //     },
//   //     id: '723',
//   //     month: 'Травень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/d542c09e-32bc-4bcf-bb6b-e56183f6bd65.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7693c189-52bf-48b8-a9b3-0463d9949933.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/05/7c9de7df-bfd8-43de-b6b5-256e24a30ca9.jpg',
//   //     ],
//   //     text:
//   //       'Проводиться демонтаж старого оздоблення, систем внутрішніх комунікацій та перегородок\n',
//   //   },
//   //   {
//   //     count: 3,
//   //     date: {
//   //       d: '17',
//   //       m: '03',
//   //       y: '2021',
//   //     },
//   //     id: '533',
//   //     month: 'Березень',
//   //     next: 0,
//   //     prev: 0,
//   //     slider: [
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0225-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //       'https://kyivproekt-wp.smarto.com.ua/wp-content/uploads/2021/03/DJI_0174-HDR.jpg',
//   //     ],
//   //     text: 'Проходить підготовка до основних будівельних робіт на майданчику.\n',
//   //   },
//   // ];
//   const data = new FormData();
//   data.append("action", "buildProgressList");
//   return fetch("/wp-admin/admin-ajax.php", {
//     method: "POST",
//     body: data,
//   });
// }

// async function initBuild() {
//   const builds = await getBuilds().then((res) => res.json(res));
//   const buildsId = builds.map((build) => +build.id);
//   const state = {
//     builds,
//     countShowBuild: 0,
//     buildsList: buildsId,
//     currentBuildId: null,
//     nextBuildId: function nextBuildId() {
//       const index = this.buildsList.indexOf(this.currentBuildId);
//       if (index >= this.buildsList.length - 1) return 0;
//       return index + 1;
//     },
//     prevBuildId: function prevBuildId() {
//       const index = this.buildsList.indexOf(this.currentBuildId);
//       if (index <= 0) return this.buildsList.length - 1;
//       return index - 1;
//     },
//     updateCurrentId: (id) => {
//       this.currentBuildId = id;
//     },
//   };

//   const buildPopup = document.querySelector("[data-build-popup-container]");
//   const containers = {
//     buildContainer: document.querySelector("[data-build-container]"),
//     buildPopup,
//     closePopup: document.querySelector("[data-close-build-popup]"),
//     nextBuildCard: document.querySelector("[data-next-build]"),
//     prevBuildCard: document.querySelector("[data-prev-build]"),
//     buildDate: buildPopup.querySelector("[data-build-date]"),
//     buildMonth: buildPopup.querySelector("[data-build-month]"),
//     buildYear: buildPopup.querySelector("[data-build-year]"),
//     loadMore: document.querySelector("[data-build-load-more]"),
//   };

//   containers.buildContainer.addEventListener(
//     "click",
//     (event) => buildContainerHandler(event, state, containers),
//     {}
//   );
//   containers.closePopup.addEventListener("click", () =>
//     closeHandler(containers)
//   );
//   containers.nextBuildCard.addEventListener("click", () =>
//     nextBuildHandler(state, containers)
//   );
//   containers.prevBuildCard.addEventListener("click", () =>
//     prevBuildHandler(state, containers)
//   );

//   containers.loadMore.addEventListener("click", () =>
//     loadMoreHandler(state, containers)
//   );
//   loadMoreHandler(state, containers);

//   sideSwitchArrow(
//     document.querySelector(".btn-gallery"),
//     document.querySelector(".gallery-swiper")
//   );
// }

// window.addEventListener("DOMContentLoaded", () => {
//   initBuild();
// });

// // ---------------------

// function createSliderPopup(slides) {
//   const slidesHtml = slides.map(createSlide).join("");
//   const pointsHtml = slides.map(createSlide).join("");
//   const bigSliderContainer = document.querySelector(
//     ".js-build-big .swiper-wrapper"
//   );
//   const smallSliderContainer = document.querySelector(
//     ".js-build-mini .swiper-wrapper"
//   );
//   if (slider) {
//     slider.destroy();
//     sliderSmall.destroy();
//   }

//   bigSliderContainer.innerHTML = slidesHtml;
//   smallSliderContainer.innerHTML = slidesHtml;
//   sliderSmall = new Swiper(".js-build-mini", {
//     // loop: true,
//     spaceBetween: 5,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     // thumbs: {
//     //   swiper: swiperBig,
//     // },
//   });
//   const swiperBig = new Swiper(".js-build-big", {
//     loop: true,
//     spaceBetween: 10,
//     preloadImages: false,
//     lazy: true,
//     watchSlidesVisibility: true,
//     thumbs: {
//       swiper: sliderSmall,
//     },
//   });

//   return swiperBig;
// }

// function createSlide(src) {
//   return `<div class="swiper-slide"><img src="${src}" alt=""></div>`;
// }

// function sideSwitchArrow(arrow, container) {
//   const mediumCordValue = document.documentElement.clientWidth / 2;
//   // document.body.append(arrow);
//   container.style.cursor = "none";
//   arrow.style.cursor = "none";
//   arrow.style.zIndex = 200;
//   arrow.__proto__.hide = function () {
//     this.style.opacity = "0";
//     this.style.pointerEvents = "none";
//   };
//   arrow.__proto__.show = function () {
//     this.style.opacity = "1";
//     // this.style.pointerEvents = 'auto';
//   };
//   arrow.dataset.side = "leftSide";

//   container.addEventListener("mousemove", desktopNavButtonHandler);
//   container.addEventListener("mouseenter", () => {
//     arrow.show();
//   });
//   container.addEventListener("mouseleave", () => {
//     arrow.hide();
//   });
//   if (document.documentElement.clientWidth < 769) {
//     window.removeEventListener("mousemove", desktopNavButtonHandler);
//     arrow.remove();
//   }

//   /** Записывает координаты обьекта, на котором нужно скрыть стрелку переключения слайдера */
//   /** ms ---> main-screen */

//   function desktopNavButtonHandler(evt) {
//     // arrow.style.position = 'fixed';
//     arrow.style.left = `${evt.clientX - 18}px`;
//     arrow.style.top = `${evt.clientY - 18}px`;

//     getCursorSide(evt.clientX);
//     handleArrowVisibility(evt);
//   }

//   function handleArrowVisibility() {}

//   function getCursorSide(x) {
//     if (x < mediumCordValue) {
//       arrow.classList.add("left-side");
//       arrow.dataset.side = "leftSide";
//       // switchGallerySlide('leftSide');
//     } else {
//       arrow.classList.remove("left-side");
//       arrow.dataset.side = "rightSide";
//       // switchGallerySlide('rightSide')
//     }
//   }

//   function clickToChange() {
//     switchGallerySlide(arrow.dataset.side);
//   }

//   container.addEventListener("click", clickToChange);
//   if (document.documentElement.clientWidth < 576) {
//     container.removeEventListener("click", clickToChange);
//   }
//   const navigate = {
//     leftSide: () => {
//       slider.slidePrev();
//     },
//     rightSide: () => {
//       slider.slideNext();
//     },
//   };

//   function switchGallerySlide(side) {
//     // console.log('cswitchGallerySlide', side);
//     navigate[side]();
//     return navigate.side;
//   }

//   // eslint-disable-next-line no-unused-vars
// }

// function updateContentPopup(build, containers) {
//   const { buildDate, buildMonth, buildYear } = containers;
//   buildDate.textContent = build.date.d;
//   buildMonth.textContent = build.month;
//   buildYear.textContent = build.date.y;

//   slider = createSliderPopup(build.slider);
//   slider.updateSlides();
//   // const slidesHtml = build.slider.map(createSlide).join('');
//   // swiperBig.wrapperEl.innerHTML = slidesHtml;
//   // swiperMini.wrapperEl.innerHTML = slidesHtml;
//   // swiperBig.update();
//   // swiperMini.update();
//   // swiperBig.updateSlides();
//   // swiperMini.updateSlides();
// }
