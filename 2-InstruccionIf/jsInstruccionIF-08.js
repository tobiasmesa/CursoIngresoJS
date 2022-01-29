function mostrar()
{
	//tomo la edad  
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	//tomo estado civil
	let estadoCivil = document.getElementById("estadoCivil").value;	
	// Check si mayor de edad y est. civil igual a soltero
	if ((edad >= 18 && estadoCivil == "Soltero")) {
		alert("Es soltero y no es menor.")
	}

	


}//FIN DE LA FUNCIÓN