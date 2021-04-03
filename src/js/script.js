document.addEventListener("DOMContentLoaded", function () {
  const galleryThumbs = new Swiper('.pagination-slider', {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1345: {
        slidesPerView: 7,
        spaceBetween: 20,

      }
    },
  });

  const galleryTop = new Swiper('.main-slider', {
    // Navigation arrows
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 20,
      },
      1345: {
        spaceBetween: 20,

      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }

  })
});