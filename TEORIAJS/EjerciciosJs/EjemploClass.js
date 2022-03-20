/*Crea una clase (usa el método antiguo) llamada producto
    Que tenga:
    -2 atributos (precio y nombre)
    -un método que determine si el valor del producto es negativo
    -un constructor, donde se puede crear el producto con un precio y un nombre
*/

function Producto(precio , nombre){

    this.precio = precio;
    this.nombre = nombre;
    this.esNegativo = function(){
        return this.precio < 0;
    }
}

let producto = new Producto(10,10);

console.log(producto.esNegativo());

/*class Producto{
    constructor (precio,nombre){
    this.precio = precio;
    this.nombre = nombre;
    }

    productoNegativo(){
        return this.precio<0;
    };
}

const producto = new Producto(10,10);

console.log(producto.productoNegativo());*/