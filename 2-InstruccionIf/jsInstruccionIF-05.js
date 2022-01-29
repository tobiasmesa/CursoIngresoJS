function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	// Ver si no es adolecente negando la condicion 
	if (!(edad <= 17 && edad >= 13)) {
		alert("No es adolecente");
	}

}//FIN DE LA FUNCIÓN