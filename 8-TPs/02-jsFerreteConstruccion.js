/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    //let radio = parseFloat(document.getElementById("txtIdRadio").value)

    let perimetro = (largo * 2) + (ancho * 2);
    let alambreTotal = perimetro * 3;

    alert("Se necesita comprar " + alambreTotal + " metros de alambre");
}
function Circulo () 
{
	let radio = parseFloat(document.getElementById("txtIdRadio").value);
    const PI = 3.14;
    let perimetro = 2 * PI * radio;
    let alambreTotal = perimetro * 3;
    
    alert("Se necesita comprar " + alambreTotal + " metros de alambre");
}
function Materiales () 
{
	let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);

    let area = ancho * largo; 
    let cantCemento = area * 2;
    let cantCal = area * 3;

    alert("Se necesitan comprar " + cantCemento + " bolsas de cemento\n y se necesitan comprar " + cantCal + " bolsas de cal.");
}