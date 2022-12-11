
const slider = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    grabCursor: true,
    loopedSlides: 6,
    followFinger: false,
    speed: 1000,
    // centeredSlides: true,
    loop: true,
    slidesPerView: 2,

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