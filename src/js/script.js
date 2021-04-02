const galleryThumbs = new Swiper('.pagination-slider', {
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const galleryTop = new Swiper('.main-slider', {
  // Navigation arrows
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }

});