function mostrar()
{
	var destino = document.getElementById("txtIdDestino").value;
	var estacion = document.getElementById("txtIdEstacion").value;
	let estadia = 15000;
	
	switch (estacion) {
		case "Invierno": 
			if (destino == "Bariloche") {
				estadia = estadia * 0.2 + estadia;
			} else if (destino == "Cataratas" || destino == "Cordoba") {
				estadia = estadia - estadia * 0.1;
			} else {
				estadia = estadia - estadia * 0.2;
			}
			break;
		case "Verano":
			if (destino == "Bariloche") {
				estadia = estadia - estadia * 0.2;
			} else if (destino == "Cataratas" || destino == "Cordoba") {
				estadia = estadia * 0.1 + estadia;
			} else {
				estadia = estadia + estadia * 0.2;
			}
			break;
		default: 
			if (destino == "Bariloche") {
				estadia = estadia + estadia * 0.1;
			} else if (destino == "Cataratas" || destino == "Mar del plata") {
				estadia = estadia * 0.1 + estadia;
			}
			
		break;
	}
	alert(`El precio final para ir a ${destino} en ${estacion} es: ${estadia}`);
	
}//FIN DE LA FUNCIÓN