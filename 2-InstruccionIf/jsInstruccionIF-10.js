function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let min = 1; 
	let max = 10;

	let nota = Math.round(Math.random() * (max - min) + min);

	if(nota >= 9){
		alert("Excelente nota: " + nota);
	} else if (nota >= 4){
		alert("Aprobó Nota: " + nota);
	} else {
		alert("Vamos, la proxima se puede. Nota: " + nota) ;
	}

}//FIN DE LA FUNCIÓN