function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let min = 1; 
	let max = 10;

	let num = Math.round(Math.random() * (max - min) + min);
	
	alert(num);	

}//FIN DE LA FUNCIÓN