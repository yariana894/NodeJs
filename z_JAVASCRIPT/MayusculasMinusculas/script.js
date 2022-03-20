function AMayusculas(){
    var frase = document.getElementById("frase");
// a mayusculas
var div_mayusculas = document.getElementById("mayusculas");
div_mayusculas.innerHTML = frase.value.toUpperCase();
}

function primeraLetraMayusculas(){
// la primera letra de cada palabra en mayuscula
var div_primera_letra = document.getElementById("primera-letra");
var listaPalabras = frase.value.split(" ");
var resultado = "";
for(p in listaPalabras){
    //console.log(listaPalabras[p]);
    palabra = listaPalabras[p]
    palabraConvertida = palabra[0].toUpperCase() + palabra.slice(1)
    resultado = resultado + palabraConvertida + " "
}

div_primera_letra.innerHTML = resultado;
}

function paresImpares(){

// pares en mayuscula e impares en minuscula
var div_pares_impares = document.getElementById("pares-impares")
var resultado = ""
for(letra in frase.value){
    if(letra%2 == 0){
        resultado = resultado + frase.value[letra]
    }else{
        resultado = resultado + frase.value[letra].toUpperCase()
    }
}
div_pares_impares.innerHTML = resultado;

}

function sinVocales(){
var div_sin_vocales = document.getElementById("sin-vocales")
var resultado = ""
for(letra in frase.value){
    if(frase.value[letra] == "a" || 
        frase.value[letra] == "e" || 
        frase.value[letra] == "i" || 
        frase.value[letra] == "o" || 
        frase.value[letra] == "u"){
        // no hago nada
    }else{
        resultado = resultado + frase.value[letra]
    }
}
div_sin_vocales.innerHTML=resultado;
}

function convertir(){
AMayusculas();
primeraLetraMayusculas();
paresImpares();
sinVocales();

}

