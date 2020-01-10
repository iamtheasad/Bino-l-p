// Header Slider
$(document).ready(function(){
   $('.header_slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
      prevArrow: '<button type="button" class="slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
      nextArrow: '<button type="button" class="slick-next"> <i class="fas fa-chevron-right"></i> </button>',
      draggable: false,
      fade: true,
   });
 });

//  Testimonial Slider
$(document).ready(function(){
   $('.testimonial_area').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
   });
});
