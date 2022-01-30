function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	let temperatura;
	
	switch (destinoIngresado){ 
		case "Bariloche": 
			temperatura = "frio";
			break;
		case "Cataratas":
			temperatura = "calor";
			break;
		case "Mar del plata":
			temperatura = "calor";
			break;
		case "Ushuaia":
			temperatura = "frio";
			break;
	}

	alert("En el destino ingresado hace " + temperatura);

}//FIN DE LA FUNCIÓN