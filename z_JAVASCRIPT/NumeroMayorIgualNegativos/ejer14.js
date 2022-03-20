
let arr = [];
let num1 = parseInt(prompt("Primer numero")); arr.push(num1);
let num2 = parseInt(prompt("Segundo numero"));arr.push(num2);
let num3 = parseInt(prompt("Tercer numero"));arr.push(num3);
let num4 = parseInt(prompt("Cuarto numero"));arr.push(num4);
let suma = 0;
let mayorCinco = 0;
let entreTres = 0;
let negativos = 0;
let mayor = parseInt(arr[0]);
for(let i = 0; i < arr.length; i++){
    let numero = parseInt(arr[i]);
    suma += numero;
    if(numero > mayor){
        mayor = numero;
    }
    if(numero > 5){
        mayorCinco = mayorCinco + 1;
    }
    if(numero >= -3 && numero <= 3){
        entreTres++;
    }
    if(numero < 0){
        negativos++;
    }
}
console.log("Mayores que cinco: "+mayorCinco);
console.log("Negativos: "+negativos);
document.getElementById('mayor').innerHTML = mayor;
document.getElementById('media').innerHTML = suma / 4;
document.getElementById('mayoresCinco').innerHTML = mayorCinco;
document.getElementById('entreTres').innerHTML = entreTres;
document.getElementById('negativos').innerHTML = negativos;