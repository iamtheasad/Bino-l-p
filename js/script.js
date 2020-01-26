$(document).ready(function () {

   // Header Slider
   $('.header_slider').owlCarousel({
      loop: true,
      items: 1,
      nav: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      animateIn: 'bounceInRight',
      animateOut: 'bounceOutLeft',
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
   });


   //  Testimonial Slider
   $('.testimonial_area').owlCarousel({
      loop: true,
      autoplay: true,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 2
         },
         1000: {
            items: 4
         }
      }
   });


   /* Services Section Hover Effect Start */
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
   /* Services Section Hover Effect End */


   /* Recent Works Isotope Start */
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
   /* Recent Works Isotope End */


   // Recent-Works Slider
   $(".recent_work_slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      animateIn: 'animateIn',
      animateOut: 'bounceOut',
   });


   // Statistics Counterup
   // Source - https://www.jqueryscript.net/other/Counting-Up-To-Numerical-Values-On-Scroll-jQuery-Countup-js.html
   $(".statistics_countup").countUp({
      'time': 3000,
      'delay': 100,
   });


   // Pricing Card Slider With Owl Carousel
   $(".pricing_card_slider").owlCarousel({
      loop: true,
      autoplay: true,
      nav: false,
      dots: false,
      animateIn: 'animateIn',
      animateOut: 'animateOut',
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 3
         }
      }
   });


   //   Integratin Section Owl Carousel
   $('.integration_item').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 3
         },
         1000: {
            items: 4
         }
      }
   });

});