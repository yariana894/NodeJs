
document.getElementById('listaOpciones').addEventListener('change', )

function lista(){

   let opcion1= document.getElementById('').value

    if (seleccionado === 'escodigoPostal') {
        console.log('se ha escocgido codigo postal')
    } else {
        console.log('otra')
    }

}

function listaOpcionesOnChange(selectObject) {
    let value = selectObject.value;
    let postal = esCodigoPostal();

    const seleccionado = event.target.value;
}

function esCodigoPostal(arreglo, buscado) {
    let m = Math.floor(arreglo.length / 2);

    if (arreglo[m] === buscado) {

        return true;
    } else if (arreglo[m] < buscado && arreglo.length > 1) {

        return esCodigoPostal(arreglo.splice(m, Number.MAX_VALUE), buscado);
    } else if (arreglo[m] > buscado && arreglo.length > 1) {

        return esCodigoPostal(arreglo.splice(0, m), buscado);
    } else {
        return false;
    }
}