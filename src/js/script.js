document.addEventListener( 'DOMContentLoaded', function() {
const scrollTop = document.getElementById('scroll-top');
  scrollTop.addEventListener('click', function(  ){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  window.addEventListener("scroll", function(){
    if(window.scrollY==0){
      //user is at the top of the page; no need to show the back to top button
      scrollTop.style.opacity = "0";
    } else {
      scrollTop.style.opacity = "1";
    }
  });

  const galleryThumbs = new Swiper( '.pagination-slider', {
    spaceBetween: 10,
    slidesPerView: 3,
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
  } );

  const galleryTop = new Swiper( '.main-slider', {
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
  } );
  document.querySelectorAll( '.header__list-item a[href^="#"]' ).forEach( anchor => {
    anchor.addEventListener( 'click', function( e ) {
      e.preventDefault();
      document.querySelector( this.getAttribute( 'href' ) ).scrollIntoView( {
        behavior: 'smooth',
      } );
    } );
  } );
  // ==================
  // === modal-menu ===
  // ==================
  (() => {
    const mobileMenu = document.querySelector( '.js-menu-container' );
    const openMenuBtn = document.querySelector( '.js-open-menu' );
    const closeMenuBtn = document.querySelector( '.js-close-menu' );
    const closeMenuItem = document.querySelectorAll( '.js-close-popup' );
    const toggleMenu = () => {
      const isMenuOpen = openMenuBtn.getAttribute( 'aria-expanded' ) === 'true' || false;
      openMenuBtn.setAttribute( 'aria-expanded', !isMenuOpen );
      mobileMenu.classList.toggle( 'is-open' );
      closeMenuItem.forEach( item => {
        item.addEventListener( 'click', function() {
          mobileMenu.classList.remove( 'is-open' );
          openMenuBtn.setAttribute( 'aria-expanded', false );
        } );
      } );
    };
    document.querySelectorAll( 'a[href^="#"]' ).forEach( anchor => {
      anchor.addEventListener( 'click', function( e ) {
        e.preventDefault();
        document.querySelector( this.getAttribute( 'href' ) ).scrollIntoView( {
          behavior: 'smooth',
        } );
      } );
    } );

    openMenuBtn.addEventListener( 'click', toggleMenu );
    closeMenuBtn.addEventListener( 'click', toggleMenu );

    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window.matchMedia( '(min-width: 1345px)' ).addEventListener( 'change', e => {
      if ( !e.matches ) return;
      mobileMenu.classList.remove( 'is-open' );
      openMenuBtn.setAttribute( 'aria-expanded', false );
    } );
  })();
// ==================
//  === backdrop ====
// ==================
  (() => {
    const refs = {
      openModalBtn: document.querySelector( '[data-modal-open]' ),
      openModalPopUp: document.querySelector( '[data-modal-openPopUp]' ),
      closeModalBtn: document.querySelector( '[data-modal-close]' ),
      backdrop: document.querySelector( '[data-backdrop]' ),
    };

    refs.openModalBtn.addEventListener( 'click', toggleModal );
    refs.openModalPopUp.addEventListener( 'click', toggleModal );
    refs.closeModalBtn.addEventListener( 'click', toggleModal );

    function toggleModal() {
      document.body.classList.toggle( 'modal-open' );
      refs.backdrop.classList.toggle( 'backdrop__hidden' );
    }
  })();
} );
