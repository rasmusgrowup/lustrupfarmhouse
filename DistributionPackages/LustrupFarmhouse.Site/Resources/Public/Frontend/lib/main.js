'use strict';

var el = document.getElementById('menu-btn');
el.addEventListener('click', function () {
  document.getElementsByClassName('menu')[0].classList.toggle('menu-activated');
}, true);
el.addEventListener('click', function () {
  document.getElementsByClassName('topbar')[0].classList.toggle('menu-activated');
}, true);
el.addEventListener('click', function () {
  document.getElementsByClassName('navigation-menu')[0].classList.toggle('menu-animate');
}, true);

// Get the modal
var modal = document.getElementById("languageModal");

// Get the button that opens the modal
var btn = document.getElementById("openLanguageMenu");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//SmoothScroll
//document.addEventListener('DOMContentLoaded', () => {
//	let smoothScroll = new scrollToSmooth('a', {
//		targetAttribute: 'href',
//		duration: 1000,
//		durationRelative: false,
//		durationMin: false,
//		durationMax: false,
//		easing: 'easeInOutCubic',
//		onScrollStart: (data) => { console.log(data); },
//		onScrollUpdate: (data) => { console.log(data); },
//		onScrollEnd: (data) => { console.log(data); },
//		fixedHeader: '#main-header'
//	})
//	smoothScroll.init();
//});

// Show & Hide menu on scroll down / up
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("topbar");

window.addEventListener('scroll', function (e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 90) {
    // header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("show");
    header.classList.add("hide");

    // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("hide");
    header.classList.add("show");
  }

  new_scroll_position = last_scroll_position;
});

//locomotive scrollingClass
document.addEventListener('DOMContentLoaded', function () {
  var scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]')
    //    smooth: true
  });
});