$( document ).ready(function(){
	$("#cpf").mask("999.999.999-99");

	$('#bt-step-1').on('click', function(){

		if($("#cpf").val() !== ''){

			console.log($("#cpf").val());

			$("#box-step-1").hide();	
			$("#box-step-2").show(100);
			$("#box-step-2").css("opacity", "1");
		}else{
			console.log('deu ruim');
			$("#cpf").addClass('required');
		}
	});
});