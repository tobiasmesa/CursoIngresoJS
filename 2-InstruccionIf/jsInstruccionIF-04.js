function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	// Check edad entre 13 y 17 
	if (edad <= 17 && edad >= 13) {
		alert("Adolecente");
	}

}//FIN DE LA FUNCIÓN