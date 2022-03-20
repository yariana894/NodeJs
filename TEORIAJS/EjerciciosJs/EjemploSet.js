
/*Almacena en un Set el nombre de 3 personas*/
const mySet = new Set();
mySet.add('Samuel');
mySet.add('Felix');
mySet.add('Carmen');

/*Determina si el nombre "Felix" está en el Set*/
console.log(mySet.has('Felix')); //true

/*Borra un elemento cualquiera del set*/
/*por índice o por valor*/
mySet.delete(0);
mySet.delete('Felix');

/*Muestra por pantalla el número de elementos guardados en el set*/
console.log(mySet.size);

/*Añade un nuevo nombre al Set,  "Ana"*/
mySet.add('Ana')