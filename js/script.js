$(document).ready(function() {
	if ($(window).width() <= "992px") {
		// $('.content2-infos').addClass('col-lg-12').removeClass('col-lg-6');
	}

	$('.burger').click(function() {
		$('.menu-mobile-items').slideToggle('fast', this.checked);
	});
});