function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	// Check mayor de edad 
	if (edad >= 18) {
		alert("Es mayor de edad");
	} else if (edad <= 17 && edad >= 13) { // check si es adolecente
		alert("Es adolecente");
	} else {
		alert("Es un niño"); // Sino es adolecente o mayor es niño 
	}



}//FIN DE LA FUNCIÓN