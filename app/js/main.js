import hello from './lib/hello.js';
import $ from 'jquery';
// import preloader from './lib/preloader.js';
import '../libs/bootstrap/dist/js/bootstrap.bundle.js';
import svg4everybody from '../libs/svg4everybody/dist/svg4everybody.legacy.js';
import '../libs/slick-carousel/slick/slick.js';
import Waypoint from '../libs/waypoints/lib/jquery.waypoints.js';

hello();
// preloader();
svg4everybody({
  polyfill: true 
});

$('section, footer, .hero__logo, .hero__bg').css('opacity', 0);


$(window).on('load', function() {

  $.when($('.loader').delay(500).fadeOut('slow').queue(function(hideloader) { 
    $(this).css({
      display: 'none'
    });
    hideloader(); 
  })).done(function() {

    $('section, footer, .hero__logo').each(function() {
      var self = $(this);
      $(this).waypoint({
        handler: function() {
          self.addClass('animated fade__barmy').css('opacity', 1);
        }, offset: '80%'
      });
    });

    $('.hero__bg').waypoint(function() {
      $('.hero__bg').addClass('animated fadeInDownSlow');
    }, { offset: '80%'});

  });
});








$('.slider__for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider__nav'
});
$('.slider__nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider__for',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});

$('.btn__mobile').click(function() {
  $(this).toggleClass('is-active');
  $('.hero__menu').toggleClass('is-active');
});
