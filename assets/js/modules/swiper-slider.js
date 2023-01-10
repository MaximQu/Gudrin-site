
const slider = () => {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 40,
    grabCursor: true,
    loopedSlides: 6,
    followFinger: false,
    speed: 1000,
    loop: true,
    slidesPerView: 2,

    breakpoints: {
      320: {
        slidesPerView: 1,

      },
      480: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,

      }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

export default slider;