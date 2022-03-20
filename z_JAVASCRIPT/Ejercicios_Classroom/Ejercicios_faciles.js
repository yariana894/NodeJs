/*Ejercicio: 
Crea una clase (usa el método antiguo) llamada producto
Que tenga:
2 atributos (precio y nombre)
un método que determine si el valor del producto es negativo
un constructor, donde se puede crear el producto con un precio y un nombre*/

function Producto(precio, nombre) {
    this.precio = precio
    this.nombre = nombre
    this.esNegativo = function() {
        return this.precio < 0;
    }
}

let a = new Producto(-1, "si")
console.log(a.nombre)
console.log(a.esNegativo())

/*Ejercicio:
Los números en javascript no tienen programada de fábrica la posibilidad de
determinar si son primos. Añade tu esa funcionalidad (usando prototype)*/

/* =====SIN USAR PROTOTYPE======
function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num !== 1;
}

console.log(esPrimo(9));*/


Number.prototype.esPrimo = function() {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false
        }
    }
    return this !== 1
}

let numero = 3
console.log(numero.esPrimo())

let numero2 = 3
console.log(numero.esPrimo())

console.log()

/*Ejercicio:
Crea una función que admita como parámetros un número, o un booleano o un string.
Si a la función se le pasa un numero devolverá ese número duplicado
Si a la función se le pasa un string, devolverá la primera letra del string (en javascript los string son arrays)
Si a la función se le pasa un booleano, devolverá YES or NOT
Pista: usa typeof*/

function miFuncion(dato) {
    let tipo = typeof(dato)
    if (tipo === "number") {
        //otra manera: if(algo.typeof(Number))
        return dato * dato;
    }
    if (tipo === "string") {
        return dato[0]
    }
    if (tipo === "boolean") {
        // return  algo === true?'yes':'no'
        if (dato === true) {
            return "yes"
        } else {
            return "false"
        }
    }
}

/*=======OTRA MANERA DE HACERLO======
function mifuncion(algo) {
    if (typeof algo === 'Number') {
        return algo * 2
    } else if (typeof algo === 'string') {
        return algo[0]

    } else if (typeof algo === 'boolean') {

        return algo === true ? 'YES' : 'NO'
    }
    return 'ERROR'
}

console.log(mifuncion(33))
console.log(mifuncion('Hola'))
console.log(mifuncion(false))*/

console.log(miFuncion(2))

/*Ejercicio:
Crea un array con los números:  6,3,55,-1,7,8,9,34,2
Obtén un array con solamente los números mayores que 10  (pista: usa filter)
Muestra por pantalla el array resultante
Intenta hacer el ejercicio usando funciones y lambdas*/
var arr = [6, 3, 55, -1, 7, 8, 9, 34, 2]

var nuevoArra = arr.filter(function(e) {
    return e > 10
})

console.log(arr)
console.log(nuevoArra)

/*Ejercicio:
Crea un array con los números:  6,3,55,-1,7,8,9,34,2
Obtén un subArray con los números 7,8,9,34 (pista: usa slice)
Muestra por pantalla el nuevo array*/
var arr = [6, 3, 55, -1, 7, 8, 9, 34, 2]
var nuevoArr = arr.slice(4, 8)
console.log(nuevoArr)

/*Ejercicio:
Crea un array con los números:  6,3,55,-1,7,8,9,34,2
Muestra por pantalla el último elemento del array
Muestra por pantalla el primer elemento del array
Muestra por pantalla el array resultante*/
var arr = [6, 3, 55, -1, 7, 8, 9, 34, 2]
var nuevoArr = arr.slice(8)
console.log(nuevoArr)

var nuevoArr02 = arr.slice(0, 1)
console.log(nuevoArr02)

console.log(arr)

/*Ejercicio:
Crea un array con los números:  6,3,55,-1,7,8,9,34,2
Elimina el último y el primer elemento del array (pista: usa pop y unshift)
Muestra por pantalla el array resultante*/
var arr = [6, 3, 55, -1, 7, 8, 9, 34, 2]
var ultimoElementoBorrado = arr.pop()
console.log(arr)
console.log('El elemento borrado es: ' + ultimoElementoBorrado)

arr.splice(0, 1)
console.log(arr)

/*Ejercicio:
Crea un array con los números:  6,3,55,-1,7,8,9,34,2
Sustituye los números -1,7,8 por los números 0,0 	(pista: usa splice)
Muestra por pantalla el array resultante*/
var arr = [6, 3, 55, -1, 7, 8, 9, 34, 2]
arr.splice(3, 4, 0, 0)
console.log(arr)


/*El siguiente código hace una llamada a un API, y devuelve un JSON (un objeto de javascript) con información completa de un usuario (random).
 */
fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(json => {
        document.getElementById('nombre').innerHTML = json.results[0].name.first

    });

/*
Tu tarea será la de mostrar por pantalla su nombre y apellidos, su email y el nombre de la calle en la que vive.*/

/*Ejercicio 10:
Almacena en un Set el nombre de 3 personas
Determina si el nombre "Felix" está en el Set
Borra un elemento cualquiera del set
Muestra por pantalla el número de elementos guardados en el set
Añade un nuevo nombre al Set,  "Ana"
*/
<script>
    let personas = new Set(['Pepe', 'Bea', 'Angel']);
    console.log(personas.has('Feliz');
    personas.delete('Angel');
    console.log('Longitud'+personas.size);
    personas.add('Feliz');
    console.log(personas.has('Feliz'));
</script>



