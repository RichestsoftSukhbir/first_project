$(function () {
  $('.scroll-button').on('click', () => {
    $('.discover-videos')[0].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

var singleSwiper = new Swiper('.slider-wrapper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});
var mySwiper = new Swiper('.desktop-video-wraper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.video-next',
    prevEl: '.video-prev',
  },
});

var mySwiper = new Swiper('.mob-video-wraper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: 'cards',
  grabCursor: true,
  slidesPerView: "auto",
  cardsEffect: {
    rotate: 0,
    perSlideOffset: 13.2
  }
});


var mySwiper = new Swiper('.desk-blog-wraper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.blog-next',
    prevEl: '.blog-prev',
  },
});

var mySwiper = new Swiper('.mob-blog-wraper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: 'cards',
  grabCursor: true,
  slidesPerView: "auto",
  cardsEffect: {
    rotate: 0,
    perSlideOffset: 13.2
  }
});

var gallerySwiper = new Swiper('.gallery-slide', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 1000,
  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },
  pagination: {
    el: ".gallery-pagination",
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});