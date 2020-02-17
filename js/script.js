(function iamScript() {
   "use strict";


   /* Bootstrap Menu Hover Added */
   $('.menu ul li.dropdown').hover(function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(.35).fadeIn(500);
   }, function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(.35).fadeOut(500);
   });
   /* Header Reponsive Menu Start*/


   // back to top 
   $('.logo').on('click', function (e) {
      e.preventDefault();
      $('.nav-toggle').removeClass('open');
      $('.menu-left').removeClass('collapse');
      $('html, body').animate({
         scrollTop: 0
      }, 750, 'easeInOutQuad')
   });

   // smooth scroll between sections
   $('a[href^="#"]').on('click', function (event) {

      var $target = $(this.getAttribute('href'));

      if ($target.length) {
         event.preventDefault();
         $('html, body').stop().animate({
            scrollTop: $target.offset().top
         }, 750, 'easeInOutQuad');
      }
   });

   // TOGGLE HAMBURGER & COLLAPSE NAV
   $('.nav-toggle').on('click', function () {
      $(this).toggleClass('open');
      $('.menu-left').toggleClass('collapse');
   });
   // REMOVE X & COLLAPSE NAV ON ON CLICK
   $('.menu-left a').on('click', function () {
      $('.nav-toggle').removeClass('open');
      $('.menu-left').removeClass('collapse');
   });

   // SHOW/HIDE NAV

   // Hide Header on on scroll down
   var didScroll;
   var lastScrollTop = 0;
   var delta = 5;
   var navbarHeight = $('header').outerHeight();

   $(window).scroll(function (event) {
      didScroll = true;
   });

   setInterval(function () {
      if (didScroll) {
         hasScrolled();
         didScroll = false;
      }
   }, 250);

   function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
         return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight) {
         // Scroll Down
         $('header').removeClass('show-nav').addClass('hide-nav');
         $('.nav-toggle').removeClass('open');
         $('.menu-left').removeClass('collapse');
      } else {
         // Scroll Up
         if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('hide-nav').addClass('show-nav');
         }
      }

      lastScrollTop = st;
   }
   /* Header Reponsive Menu End */


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
      var $grid = $('.recent_works').isotope({
         itemSelector: '.recent_work_box',
         percentPosition: true,
         masonry: {
            columnWidth: 0,
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


      /* Scroll to Top Button Start */

      // https://codepen.io/karencho/pen/KIgur
      // declare variable
      var topBottomButton = $(".top_bottom_button");

      $(window).scroll(function () {

         // Declare Variable
         var topPosition = $(this).scrollTop(); // scrollTop is a jquery function

         // if user scrolls down - show scroll to top button
         if (topPosition > 900) {
            $(topBottomButton).css({
               "opacity": "1",
            })

         } else {
            $(topBottomButton).css({
               "opacity": "0",
            })
         }
      }); // Scroll End

      //Click event to scroll to top
      $(topBottomButton).on('click', function () {
         $('html, body').animate({
            scrollTop: 0
         }, 2000);
         return false;

      }); // click() scroll top end

      /* Scroll to Top Button End */

   }); // ready() function end
})(); // "use strict" method end