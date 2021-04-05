document.addEventListener('DOMContentLoaded', function () {
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
        spaceBetween: 30,
      },
      1345: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
    },
  });

  const galleryTop = new Swiper('.main-slider', {
    // Navigation arrows
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      320: {
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next-mobile',
          prevEl: '.swiper-button-prev-mobile',
        },
      },
      768: {
        spaceBetween: 40,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      1345: {
        spaceBetween: 90,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },

    thumbs: {
      swiper: galleryThumbs,
    },
  });
});

//
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuItem = document.querySelectorAll('.modal-menu__nav-item');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    closeMenuItem.forEach(item => {
      item.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
      });
    });
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuItem.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 1345px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();
