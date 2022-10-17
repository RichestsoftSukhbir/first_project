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

var artileSwiper = new Swiper('.article-slider', {
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1.2,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 1.3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 1.3,
      spaceBetween: 30
    }
  },
  pagination: {
    el: '.article-pagination',
    type: "progressbar"
  }
});

artileSwiper.on('slideChange', function () {
  realIndex(this);
});

function realIndex(data) {
  if((data.realIndex + 1) <= 9) {
    document.querySelector('.current-index').innerText = "0" + (data.realIndex + 1);
  } else {
    document.querySelector('.current-index').innerText = (data.realIndex + 1);
  }
}
$('.total-index').text(totalIndex());

function totalIndex() {
  if(($('.article-slide:not(.swiper-slide-duplicate)').length) <= 9) {
    $('.total-index').text("0" + ($('.article-slide:not(.swiper-slide-duplicate)').length));
  } else {
    $('.total-index').text($('.article-slide:not(.swiper-slide-duplicate)').length);
  }
}