function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	//tomo estado civil
	let estadoCivil = document.getElementById("estadoCivil").value;	
	// Check si menor de edad y dif. de soltero
	if (edad < 18 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero.")
	}


}//FIN DE LA FUNCIÓN