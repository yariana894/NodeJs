    /*Crea un array con los números:  6,3,55,-1,7,8,9,34,2

    Obtén un array con solamente los números mayores que 10  (pista: usa filter)
    Muestra por pantalla el array resultante
    Intenta hacer el ejercicio usando funciones y lambdas */

    let arrayNormal = [6, 3, 55, -1, 7, 8, 9, 34, 2];

                            /*crea un array nuevo aplicando el criterio que le pongas*/
    let arrayMayoresADiez = arrayNormal.filter(function (numero) { return (numero >= 10) } );

    console.log('Array de mayores de 10: ' + arrayMayoresADiez);


    /*en modo lambda*/

                                                /*se quita function, llaves, y el return (si es solo una línea)*/
    let arrayMayoresDiezLambda = arrayNormal.filter( numero => numero >= 10 );
    console.log( 'Array de mayores de 10 lambda: ' + arrayMayoresDiezLambda);





    