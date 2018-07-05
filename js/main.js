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