// Header Slider
$(document).ready(function () {
   $('.header_slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
      nextArrow: '<button type="button" class="slick-next"> <i class="fas fa-chevron-right"></i> </button>',
      draggable: false,
      fade: true,
   });
});

//  Testimonial Slider
$(document).ready(function () {
   $('.testimonial_area').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
   });
});

// Services Section Hover Effect
$(document).ready(function () {

   $(".service_icon_1, .service_text_1").hover(function () {
      $(".service_bar_1").css({
         "background-color": "#e74c3c",
         "height": "2px"
      });
   }, function () {
      $(".service_bar_1").css({
         "background-color": "#2a2a2a",
         "height": "1px"
      });
   });


   $(".service_icon_2, .service_text_2").hover(function () {
      $(".service_bar_2").css({
         "background-color": "#e74c3c",
         "height": "2px"
      });
   }, function () {
      $(".service_bar_2").css({
         "background-color": "#2a2a2a",
         "height": "1px"
      });
   });


   $(".service_icon_3, .service_text_3").hover(function () {
      $(".service_bar_3").css({
         "background-color": "#e74c3c",
         "height": "2px"
      });
   }, function () {
      $(".service_bar_3").css({
         "background-color": "#2a2a2a",
         "height": "1px"
      });
   });

});

// Recent Works Isotope
jQuery(document).ready(function () {
   var $grid = $('.iso_recent_work').isotope({
      itemSelector: '.recent_work_box',
      percentPosition: true,
      masonry: {
         // use outer width of grid-sizer for columnWidth
         columnWidth: 1
      }
   });

   // filter items on button click
   $('.recent_work_menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
         filter: filterValue
      });
   });

   // Active Class For Isotope Menu
   $('.recent_work_menu button').on('click', function (e) {
      $(this).addClass('recent_work_active').siblings('.recent_work_active').removeClass('recent_work_active');
      e.preventDefault();
   });
});


// Recent-Works Slider
jQuery(document).ready(function () {
   $(".recent_work_slider").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      fade: true,
   });
});


// Statistics Counterup
// Source - https://www.jqueryscript.net/other/Counting-Up-To-Numerical-Values-On-Scroll-jQuery-Countup-js.html
jQuery(document).ready(function () {
   $(".statistics_countup").countUp({
      'time': 3000,
      'delay': 100,
   });
});