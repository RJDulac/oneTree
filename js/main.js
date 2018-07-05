$(document).ready(function() {
	//bootstrap function
	$(window).scroll(function(){
		if ($(window).scrollTop() > 970) {
			//boostrap 4 changed the class from navbar-fixed-top to fixed-top
			$('.navbar').addClass('fixed-top');
		}
		if ($(window).scrollTop() < 971) {
			$('.navbar').removeClass('fixed-top');
		}
	});

});