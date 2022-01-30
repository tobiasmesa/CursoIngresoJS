function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	let puntoCardinal;
	
	switch (destinoIngresado){ 
		case "Bariloche": 
			puntoCardinal = "Oeste";
			break;
		case "Cataratas":
			puntoCardinal = "Norte";
			break;
		case "Mar del plata":
			puntoCardinal = "Este";
			break;
		case "Ushuaia":
			puntoCardinal = "Sur";
			break;
	}

	alert("La ubicación ingresa queda en el " + puntoCardinal);
}//FIN DE LA FUNCIÓN