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
