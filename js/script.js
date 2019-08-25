$(document).ready(function() {
	$('.burger').click(function() {
		$('.menu-mobile-items').slideToggle('fast', this.checked);
	});
});