/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;

let numRandomUno = Math.round(Math.random() * 9 + 1);
let numRandomDos = Math.round(Math.random() * 9 + 1);
let numRandomOperador = Math.round(Math.random() * 3 + 1);
let operador;
let resultado = 0;

switch (numRandomOperador) {
    case 1: 
        resultado = numRandomUno + numRandomDos; 
        operador = "+";
        break;
    case 2: 
        resultado = numRandomUno - numRandomDos; 
        operador = "-";
        break;
    case 3: 
        resultado = numRandomUno * numRandomDos; 
        operador = "*"
        break;
    default:
        resultado = numRandomUno / numRandomDos; 
        operador = "/"
        break;
}

function comenzar()
{
    document.getElementById("txtIdPrimerNumero").value = numRandomUno;
    document.getElementById("txtIdSegundoNumero").value = numRandomDos;
    document.getElementById("txtIdOperador").value = operador;

}//FIN DE LA FUNCIÓN
function Responder()
{
    let respuesta = parseInt(document.getElementById("txtIdRespuesta").value);
	if(respuesta === resultado) {
        alert("Correcto!");
    } else {
        alert("Incorrecto!");
    }

}//FIN DE LA FUNCIÓN
