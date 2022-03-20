
var canvas = document.getElementById("miCanvas");

function aleatorioEntre2Valores(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
function colorAleatorio(){
	var num = aleatorioEntre2Valores(0,8);
	switch (num) {
		case 0: return "red";
		case 1: return "blue";
		case 2: return "green";
		case 3: return "orange";
		case 4: return "pink";
		case 5: return "black";
		case 6: return "yellow";
		case 7: return "brown";
		case 8: return "magenta";
		default: return "black";
	}
}

var listaCirculos = []

class Circulo {
  constructor(posX, posY, radio, color) {
    this.posX = posX;
    this.posY = posY;
    this.radio = radio;
    this.color = color;
  }
}
function generarCirculoAleatorio(){
	var posX = aleatorioEntre2Valores(0,250)
	var posY = aleatorioEntre2Valores(0,250)
	var radio = aleatorioEntre2Valores(3,10)
	var color = colorAleatorio();
	var c = new Circulo(posX, posY, radio, color)
	return c
}
function dibujarCirculoPantalla(c){
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle=c.color
	// Genero un arco de 0 a 360 grados (de 0 a 2*PI)
	ctx.arc(c.posX,c.posY, c.radio, 0, 2*Math.PI);
	ctx.stroke();
}

for(i=0;i<100;i++){
	var c  = generarCirculoAleatorio();
	listaCirculos.push(c)
}

for(var i=0;i<listaCirculos.length; i++){
	dibujarCirculoPantalla(listaCirculos[i])
}

function pintar(){
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0,0, canvas.width,canvas.height);

	for(var i=0;i<listaCirculos.length; i++){
		listaCirculos[i].posY = listaCirculos[i].posY+1
		dibujarCirculoPantalla(listaCirculos[i])
	}
	console.log(canvas.height);
console.log(listaCirculos[0]);
}

function borrarCirculos(){
	var listaBorrar=[]
	for(var i=0;i<listaCirculos.length; i++){
		if(listaCirculos[i].posY >canvas.height+200){
			listaBorrar.push(listaCirculos[i])
		}
	}
	for(var i=0;i<listaBorrar.length; i++){
		listaCirculos.pop(listaBorrar[i])
	}
}

function generarNuevoCirculos(){
	var c  = generarCirculoAleatorio();
	listaCirculos.push(c)
}

setInterval('pintar()',50);
setInterval('borrarCirculos()',100);
setInterval('generarNuevoCirculos()',500);





