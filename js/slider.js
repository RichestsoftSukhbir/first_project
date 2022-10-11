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
var mySwiper = new Swiper('.video-wrapper', {
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
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.video-next',
    prevEl: '.video-prev',
  },
});
var mySwiper = new Swiper('.blog-wrapper', {
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
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.blog-next',
    prevEl: '.blog-prev',
  },
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
});