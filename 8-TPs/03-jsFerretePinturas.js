/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    let celcius = (fahrenheit - 32) * 5 / 9;
    alert(`${fahrenheit} fahrenheit son ${celcius.toFixed(1)} centigrados`);
}

function CentigradosFahrenheit () 
{
	let celcius = parseFloat(document.getElementById("txtIdTemperatura").value);
    let fahrenheit = (celcius * 9 / 5 )+ 32;
    alert(`${celcius} centigrados son ${fahrenheit.toFixed(1)} fahrenheit`);
}
