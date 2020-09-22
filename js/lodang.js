(function($) {
  "use strict"; // Start of use strict
  $('.scrollable').slick({
    dots: false,
    swipe: true,
    arrows: true,
    infinite: false,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  $('.scrollable').on('afterChange', function(event, slick, currentSlide) {

    if (currentSlide === 2) {
      $('.slick-next').addClass('hidden');
    } else {
      $('.slick-next').removeClass('hidden');
    }

    if (currentSlide === 0) {
      $('.slick-prev').addClass('hidden');
    } else {
      $('.slick-prev').removeClass('hidden');
    }
  })

})(jQuery); // End of use strict
