$(document).ready(function() {
	// Abrir e fechar o menu 
	$('.burger').click(function() {
		$('.menu-mobile-items').slideToggle('fast', this.checked);
	});
	// Fim
	
	// Funcionalidade para limpar os campos do formulario de pedido 
	$("#cleanInputs").on("click", function() {
		$(".inputs").each(function() {
			$(this).val("");
		});
	});
	// Fim
});