function entrar() {
    let nom = document.getElementById('nombre').value;
    let ape = document.getElementById('apellidos').value;
    let anhos = document.getElementById('edad').value;
    let res = document.getElementById('resultado')

    if (parseInt(anhos) < 18) {
        let msg = 'Lo siento ' + nom + " " + ape + " no tienes la edad suficiente para acceder al servicio";
        res.innerHTML = msg
        alert(msg)
    } else {
        let msg = 'Bienvenido ' + nom + " " + ape;
        res.innerHTML = msg
        alert(msg)
    }
}