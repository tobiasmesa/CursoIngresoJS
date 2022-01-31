var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;


function comenzar()
{
	let random = Math.round(Math.random() * 2 + 1);
    document.getElementById("txtIdGanadas").value = ContadorDeGanadas + " ganadas";
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates  + " empates";
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas  + " perdidas";
	
	
	switch (random) {
        case 1:
            eleccionMaquina = "piedra"; 
            break;
        case 2: 
            eleccionMaquina = "papel"; 
            break;
        case 3:
            eleccionMaquina = "tijera"; 
            break;
    }



//alert(eleccionMaquina)
}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina == "piedra") {
        alert("Empate");
		ContadorDeEmpates++;
    } else if (eleccionMaquina == "tijera") {
        alert("Ganó");
		ContadorDeGanadas++;
    }  else {
        alert("Perdió");
		ContadorDePerdidas++;
    }
    comenzar();
}//FIN DE LA FUNCIÓN
function papel()
{
    if (eleccionMaquina == "papel") {
        alert("Empate");
		ContadorDeEmpates++;
    } else if (eleccionMaquina == "piedra") {
        alert("Ganó");
		ContadorDeGanadas++;
    }  else {
        alert("Perdió");
		ContadorDePerdidas++;
    }
    comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == "tijera") {
        alert("Empate");
		ContadorDeEmpates++;
    } else if (eleccionMaquina == "papel") {
        alert("Ganó");
		ContadorDeGanadas++;
    }  else {
        alert("Perdió");
		ContadorDePerdidas++;
    }

    comenzar();
}//FIN DE LA FUNCIÓN