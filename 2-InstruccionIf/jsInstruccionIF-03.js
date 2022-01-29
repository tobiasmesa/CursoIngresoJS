function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	// Check mayor de edad sino es menor de edad
	if (edad >= 18) {
		alert("Mayor de edad");
	} else {
		alert("Menor de edad");
	}

}//FIN DE LA FUNCIÓN