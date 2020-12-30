(function($) {
	"use strict"; // Start of use strict

	// klikc show search mobile
	// $('.input-group-text').on('click', function() {
	// 	$('.form-mobile').toggleClass('w-78');
	// });

	// slick slider
	$('.scrollable').slick({
		dots: false,
		swipe: true,
		arrows: true,
		infinite: false,
		variableWidth: true,
		slidesToShow: 1,
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
	});

	var priceSlider = document.getElementById('price-slider'),
		currencyVar = 'Rp';

	// Check if #price-slider elem is exists if not return
	// to prevent error logs
	if (priceSlider == null) return;

	noUiSlider.create(priceSlider, {
		start: [0, 1000],
		connect: true,
		step: 100,
		margin: 100,
		range: {
			'min': 0,
			'max': 1000
		}
	});

	// Update Price Range
	priceSlider.noUiSlider.on('update', function (values, handle) {
		var values = values.map(function (value) {
			return currencyVar + value;
		})
		$('#filter-price-range').text(values.join(' - '));
	});

	// scroll show and hide
	$(document).on('scroll', function() {
		var y = $(this).scrollTop();
		if (y >= 400) {
			$('#scroll-top').addClass('fixed');
		} else {
			$('#scroll-top').removeClass('fixed');
		}
	})

	// scroll top
	$('#scroll-top').on('click', function (e) {
		$('html, body').animate({
			'scrollTop': 0
		}, 1200);
		e.preventDefault();
	});

	
})(jQuery); // End of use strict

$('.owl-carousel').owlCarousel({
	loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.horizontal-quantity').TouchSpin({
	verticalbuttons: false,
	buttondown_class: 'btn btn-outline rounded-0',
	buttonup_class: 'btn btn-outline rounded-0',
	initval: 1,
	min: 1
});

$('.quantity-cart').TouchSpin({
	verticalbuttons: false,
	buttondown_class: 'btn btn-outline rounded-0 px-2',
	buttonup_class: 'btn btn-outline rounded-0 px-2',
	initval: 1,
	min: 1
});
