function mostrar()
{
	//tomo la hora
	var horaDelDia = parseInt(document.getElementById("txtIdHora").value);

	switch(horaDelDia) {
		case 7: 
		case 8: 
		case 9: 
		case 10: 
		case 11: 
			alert("Es de mañana.");
			break;
	}
	



}//FIN DE LA FUNCIÓN