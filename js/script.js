// navbar show and hide on scroll
let header = document.querySelector(".header");
let navHeight = header.clientHeight;

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-" + navHeight + "px";
  }
  prevScrollpos = currentScrollPos;
}

// navmenu active class toggler
let url =  window.location.pathname;
let menu = document.querySelectorAll(".main-menu li a.nav-link");
if(url != "/database-desc.html"){
  menu.forEach(function(element) {
    if(url == element.pathname) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

// copyright year
if (document.querySelector(".year")) {
  document.querySelector(".year").innerHTML = new Date().getFullYear();
}

// ham menu
if (document.querySelector('.hamburger')) {
  let ham = document.querySelector('.hamburger');
  let menu = document.querySelector('.main-menu');

  ham.addEventListener('click', () => {
    toggleMenu();
  });

  function toggleMenu() {
    menu.classList.toggle('menu-active');
    ham.classList.toggle('ham-active');
  }
}

// search overlay
if ($('.search')) {
  let search = $('.search');
  let closeSearch = $('.close-popup');
  let searchOverlay = $('.search-overlay');
  search.on('click', function () {
    searchToggle();
  });
  closeSearch.on('click', function () {
    searchToggle();
  });
  searchOverlay.on('click', function () {
    searchToggle();
  });

  function searchToggle() {
    $('.search-popup').toggleClass('menu-active');
  }
}

// video popup
if (document.querySelector(".video-popup")) {
  let playButton = document.querySelectorAll(".play-button");
  let videoOverlay = document.querySelector(".video-popup");
  let closeVideo = document.querySelector(".close-video");

  playButton.forEach(function (element) {
    element.addEventListener("click", (e) => {
      videoToggler();
    });
  });
  closeVideo.addEventListener('click', () => {
    videoToggler();
  });

  function videoToggler() {
    videoOverlay.classList.toggle("active");
  }
}

// premium popup
if (document.querySelector(".premium-popup")) {
  let premiumPopup = document.querySelector(".premium-popup");
  let premiumSearch = document.querySelector(".premium-search");
  let premiumOverlay = document.querySelector(".popup-overlay");

  premiumSearch.addEventListener("click", () => {
    premiumToggler();
  });

  premiumOverlay.addEventListener("click", () => {
    premiumToggler();
  });

  function premiumToggler() {
    premiumPopup.classList.toggle("active");
    premiumOverlay.classList.toggle("active");
  }
}

// show password
if (document.querySelectorAll(".show-pass")) {
  let showPass = document.querySelectorAll(".show-pass");
  showPass.forEach(function (element) {
    element.addEventListener("click", (e) => {
      if (e.target.previousElementSibling.type === "password") {
        e.target.previousElementSibling.type = "text";
        e.target.classList.remove("fa-eye");
        e.target.classList.add("fa-eye-slash");
      } else {
        e.target.previousElementSibling.type = "password";
        e.target.classList.remove("fa-eye-slash");
        e.target.classList.add("fa-eye");
      }
    });
  });
}

// details update popup
if (document.querySelector('.details-update-popup')) {
  let detailPopup = document.querySelector('.details-update-popup');
  let detailOverlay = document.querySelector('.details-overlay');
  let updateButton = document.querySelector('.update-details');

  updateButton.addEventListener('click', () => {
    detailToggler();
  });
  detailOverlay.addEventListener('click', () => {
    detailToggler();
  });

  function detailToggler() {
    detailPopup.classList.toggle("active");
    detailOverlay.classList.toggle("active");
  }
}

// filter hide & show using jquery
let filterButton = $('.filter-icon');
let filterWrapper = $('.filter-wrapper');
filterButton.on("click", function() {
  filterWrapper.slideToggle();
});