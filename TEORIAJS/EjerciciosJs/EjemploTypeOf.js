    /*Crea una función que admita como parámetros un número, o un booleano o un string.
    Si a la función se le pasa un número devolverá ese número duplicado
    Si a la función se le pasa un string, devolverá la primera letra del string (en javascript los string son arrays)
    Si a la función se le pasa un booleano, devolverá YES or NOT
    Pista: usa typeof*/

    function admitirCosas( cosa ){
        if (typeof cosa == ('number') )return cosa * 2;
        else if (typeof cosa == ('string') ) return cosa.charAt(0);
        else if (typeof cosa == ('boolean')) {
            return cosa ===true ? 'yes':'no';
        }

    }

    console.log(admitirCosas(2));
    console.log(admitirCosas('samuel'));
    console.log(admitirCosas(true));




