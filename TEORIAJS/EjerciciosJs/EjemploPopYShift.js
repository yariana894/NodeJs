/*Crea un array con los números:  6,3,55,-1,7,8,9,34,2

Muestra por pantalla el último elemento del array
Muestra por pantalla el primer elemento del array
Muestra por pantalla el array resultante
*/

let arr = [6,3,55,-1,7,8,9,34,2];

let arrLastElement = arr.pop();
let arrFirstElement = arr.shift();

console.log('Array resultante: ' + arr + '\n'
            + 'Primer elemento: ' + arrFirstElement
            + '\n' + 'Último elemento: ' + arrLastElement);