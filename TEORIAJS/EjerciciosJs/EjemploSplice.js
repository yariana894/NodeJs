/*Ejercicio:
Crea un array con los números:  6,3,55,-1,7,8,9,34,2

Sustituye los números -1,7,8 por los números 0,0 	(pista: usa splice)
Muestra por pantalla el array resultante
*/

arr = [6,3,55,-1,7,8,9,34,2];

/*índice*/          /*elementos a borrar*/       /*elementos a introducir*/
arr.splice(3 , 3, 0 , 0 , 0);
console.log(arr);