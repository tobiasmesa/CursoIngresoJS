function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

	switch(mes){ 
		case "Enero":
		case "Marzo":
		case "Mayo": 
		case "Julio": 
		case "Agosto": 
		case "Octubre": 
		case "Diciembre":
			alert("Tiene 31 días.");
			break; 
		case "Febrero": 
			alert("Tiene 28 días.");
			break; 
		default:
			alert("Tiene 30 días."); 
			break;
	}
	



}//FIN DE LA FUNCIÓN