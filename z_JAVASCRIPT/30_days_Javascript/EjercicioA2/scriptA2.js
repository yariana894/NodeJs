document.getElementById('info').addEventListener('click', mostrarResultados);

function mostrarResultados() {
    return numeroMitadArray() + "\n" + si5Incluido();
}

function arrayNumeros() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

function si5Incluido() {
    let a = arrayNumeros();

    let siEsta5 = false;

    for (i = 0; i < a.length; i++) {
        if (a[i] === 5) {
            siEsta5 = true;
        }
    }
    document.getElementById('resultado').innerHTML = siEsta5;
}

function numeroMitadArray() {
    let b = arrayNumeros();

    let res;

    if (b.length % 2 === 0) {
        res = b.slice(3, 5);
    } else {
        res = b.slice(4, 5);
    }
    document.getElementById('numero5').innerHTML = res;
}


