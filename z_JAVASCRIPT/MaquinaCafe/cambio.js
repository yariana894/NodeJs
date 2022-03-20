class Cambio {

	constructor(cantidad, monedas) {
		this.cantidad = cantidad;
		this.vectorMonedas = monedas;
        this.matrizCambio = this.calcularMonedas(cantidad, monedas);
		this.vectorSeleccion = this.seleccionarMonedas(cantidad, monedas, this.matrizCambio);
	}

	getVectorSeleccion() { // devuelve un array de enteros
		return this.vectorSeleccion;
	}

	calcularMonedas(cantidad, monedas) { // devuelve una matriz de enteros
		// creo el array principal
		this.matrizCambio = new Array(monedas.length  )
		//cantidad=Math.round(cantidad)
		console.log("cant:"+cantidad)
		console.log("Mone:"+monedas)
		// creo el array secundario
        for(let i=0;i<this.matrizCambio.length;i++){
			this.matrizCambio[i] = new Array(cantidad+1 )
        }
        
		
		
		//int[][] matrizCambio = new int[monedas.length + 1][cantidad + 1];
		// relleno la primera columna con 0's
		for (let i = 0; i < monedas.length; i++)
			this.matrizCambio[i][0] = 0;

		// Relleno la primera fila con 99 (saltandome la posición 0)
		for (let j = 1; j <= cantidad; j++)
            this.matrizCambio[0][j] = 99;
			
		// Relleno el resto de la tabla
		for (let i = 1; i < monedas.length; i++)
			for (let j = 1; j <= cantidad; j++) {
				if (j < monedas[i - 1]) {
					this.matrizCambio[i][j] = this.matrizCambio[i - 1][j];
				} else {
					let minimo = 0;
					minimo = this.min(this.matrizCambio[i - 1][j], this.matrizCambio[i][j - monedas[i - 1]] + 1);
					this.matrizCambio[i][j] = minimo;

                }
                
			}
			
		console.log(this.matrizCambio)

		//return
		return this.matrizCambio;
	}

	seleccionarMonedas(c, monedas, tabla) { // devuelve un array de enteros
		let i, j;
		let seleccion = new Array(monedas.length);
		for (i = 0; i < monedas.length; i++) {
			seleccion[i] = 0;
        }
       // 
		i = monedas.length-1;
        j = c;
		while (j > 0) {
			if (i > 1 && (tabla[i][j] === tabla[i - 1][j]) ) {
				i--;
			} else {
				seleccion[i - 1]++;
				j = j - monedas[i - 1];
			}
		}
        
		return seleccion;
	}

	min(a,b) {
		if (a < b)
			return a;
		else
			return b;
	}

}