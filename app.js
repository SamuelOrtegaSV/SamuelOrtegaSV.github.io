alert("Mensaje de prueba")

function lanzarAlerta(){
	alert("Mi alerta")
}

//aca calculamos el reemplazo
function censurar(){
	var  x = document.getElementById("var_uno").value	
	var  y = document.getElementById("var_dos").value
	var calculo = x.replace(new RegExp(y, "g"), "****");
	document.getElementById("res").value = calculo
}

function suma(){
	var calculo = Number(document.getElementById("var_uno").value) + Number(document.getElementById("var_dos").value);
	document.getElementById("res").value = calculo
}

function resta(){
	var calculo = Number(document.getElementById("var_uno").value) - Number(document.getElementById("var_dos").value);
	document.getElementById("res").value = calculo
}

function multiplica(){
	var calculo = Number(document.getElementById("var_uno").value) * Number(document.getElementById("var_dos").value);
	document.getElementById("res").value = calculo
}

function divida(){
	if (Number(document.getElementById("var_dos").value>0)) {
		var calculo = Number(document.getElementById("var_uno").value) / Number(document.getElementById("var_dos").value);
		document.getElementById("res").value = calculo
	} else {
		document.getElementById("res").value = 0
	}
}