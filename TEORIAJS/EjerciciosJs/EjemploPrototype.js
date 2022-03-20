

/*  Los números en javascript no tienen programada de fábrica la posibilidad de determinar si son primos.
    Añade tu esa funcionalidad (usando prototype)*/

Number.prototype.esPrimo = function () {
    for (let i = 2 ; i < this * 0.5 ; i++) {
            if (this % i === 0) return 'No es primo';
        }return 'Es primo';
    }

let num1 = 22;
console.log(num1.esPrimo());

