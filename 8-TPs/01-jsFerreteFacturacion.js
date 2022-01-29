/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let numUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let numDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let numTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let suma = numUno + numDos + numTres;

    alert("La suma es: $" + suma);
}
function Promedio () 
{
	let numUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let numDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let numTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let promedio = ((numUno + numDos + numTres) / 3);

    alert("El promedio es: $" + promedio.toFixed(2));
}
function PrecioFinal () 
{
	
	let numUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let numDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let numTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let suma = numUno + numDos + numTres;
    let precioFinal = (suma * 0.21) + suma;

    alert("El precio final es: $" + precioFinal.toFixed(2));
}