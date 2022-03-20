
let Jose = {};

let arr = [
    [true, false, true],
    Jose,
    {
        nombre:'Manzana',
        precio:{
            iva: 5.6,
            sinIva: 2.6
        }
    },
    true,
    function(){
        return 'Hola mundo'
    },
    function(nombre){
        return 'Hola '+nombre
    },
    [4,5,6]
]

/*Usando el array, haz que salga por pantalla la frase 'Hola Pepe'*/
console.log(arr[5]('Pepe'));

/*Muestra por pantalla la cantidad de booleanos que hay en el primer elementos del array*/
console.log('El número de booleanos en el array: ' + arr[0].length);

/*Muestra el precio con iva de la manzana por pantalla*/
console.log('Precio de la manzana con iva: ' + arr[2].precio.iva)

/*Muestra por pantalla todos los números guardados en la última posición del array [4,5,6] pero duplicando su valor	(pista: usa map)*/
let numsDoubled = arr[6].map(num => num * 2);
console.log(numsDoubled);