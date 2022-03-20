document.getElementById('entrar').addEventListener('click', mayorEdad)

function mayorEdad() {
    var age = document.getElementById('edad').value;
    var name = document.getElementById('nombre').value;
    var surnames = document.getElementById('apellidos').value;

    if (age < 18) alert("Lo siento " + name + " no tienes edad suficiente");
    else alert("Bienvenido " + name + " " + surnames);

    document.getElementById('resultado').innerHTML = alert;


}