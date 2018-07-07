$(document).ready(function() {
	//bootstrap function
	$(window).scroll(function(){
		if ($(window).scrollTop() > $(window).height()) {
			//boostrap 4 changed the class from navbar-fixed-top to fixed-top
			$('.navbar').addClass('fixed-top');
		} else {
			$('.navbar').removeClass('fixed-top');
		}
	});
});

//smooth scrolling

//select elements
// $(".navbar-dark ul li a[href^='#']").on('click', function(e) {
// 	//prevent scrolling from happening without animation
// 	e.preventDefault();

// 	//store click in hash variable
// 	var hash = this.hash;

// 	$('html, body').animate({
// 		scrollTop: $(hash).offset().top
// 		//300ms is the speed of scrolling
// 	}, 300, function(){
// 		window.location.hash = hash;
// 	});
// });

//improved code
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 300);
				return false;
			}
		}
	});
});

//scrolling animations

$('.js-wp-1').waypoint(function(direction) {
	$('.js-wp-1').addClass('animated fadeInDown');
}, {
	offset: '50%'
})

$('.js-wp-2').waypoint(function(direction) {
	$('.js-wp-2').addClass('animated fadeInLeft');
}, {
	offset: '50%'
})

$('.js-wp-3').waypoint(function(direction) {
	$('.js-wp-3').addClass('animated fadeInRight');
}, {
	offset: '50%'
})
$('.js-wp-4').waypoint(function(direction) {
	$('.js-wp-4').addClass('animated fadeInUp');
}, {
	offset: '50%'
})
//timeline
$('.js-wp-right').waypoint(function(direction) {
	$('.js-wp-right').addClass('animated fadeInRight');
}, {
	offset: '50%'
})
$('.js-wp-left').waypoint(function(direction) {
	$('.js-wp-left').addClass('animated fadeInLeft');
}, {
	offset: '50%'
})

//timeline dates

$('.js-wp-bounce-in-up').waypoint(function(direction) {
	$('.js-wp-bounce-in-up').addClass('animated bounceInUp');
}, {
	offset: '50%'
})

$('.js-wp-fade-in').waypoint(function(direction) {
	$('.js-wp-fade-in').addClass('animated fadeIn');
}, {
	offset: '50%'
})

//parallax section


$('.js-wp-flip-in-x').waypoint(function(direction) {
	$('.js-wp-flip-in-x').addClass('animated flipInX');
}, {
	offset: '50%'
})

