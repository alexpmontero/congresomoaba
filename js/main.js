$(document).ready(function(){
	cargarEfectos();

	// validar formulario
	$("#form_contacto").validate({
		rules: {
			name : "required",
			subject : "required",
			message : "required",
			email : {
				required : true,
				email : true
			}
		},
		messages : {
			name : "Este campo es requerido.",
			subject : "Este campo es requerido.",
			message : "Este campo es requerido.",
			email : {
				required : "Este campo es requerido.",
				email : "Especifique una dirección de correo válida"
			}
		},
		submitHandler: function(form) {
			var $form = $(form),
				$spanSuccess = $('#span_exito'),
				$spanMessage = $('#span_mensaje'),
				$spanError = $('#span_error'),
				inputs = $form.serializeArray();		

			$spanSuccess.hide();
			$spanError.hide();

			data = {}
			for (var i = 0; i < inputs.length; i++) {
				data[inputs[i].name] = inputs[i].value;
				
			}		
			$('.cambio2').hide();
			$spanMessage.show();

			$.ajax({
				url : 'sendmail.php',
				type : 'POST',
				data : data
			})
			.done(function(response){				

				$spanMessage.hide();
				$('.cambio2').show();

				if (response == 1) {
					$spanSuccess.fadeIn('fast').delay(1000).fadeOut('fast');
					$form.trigger('reset');
				}
				else {
					$spanError.fadeIn('fast').delay(1000).fadeOut('fast');	
				}			

			})
			.fail(function(response){
				$spanError.fadeIn('fast').delay(1000).fadeOut('fast');
			});
		},
		errorElement : 'span'	  
	});
});