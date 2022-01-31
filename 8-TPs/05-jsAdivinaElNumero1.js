/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
const min = 1;
const max = 100;


function comenzar()
{
  document.getElementById("txtIdNumero").value = " ";
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.round(Math.random() * (max - min) + min);
  alert(numeroSecreto)
  contadorIntentos = 0;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
}

function verificar()
{
  contadorIntentos++;
  let numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  if (numeroIngresado == numeroSecreto) {
    alert(`Usted es un ganador!!! y en solo ${contadorIntentos} intentos`);
  } else if (numeroIngresado < numeroSecreto) {
    alert("Falta"); 
  } else {
    alert ("Se pasó");
  }
}