// para crear funciones en javascript utilizamos "function"
//y lo que queremos hacer
//Código escrito en el lenguaje javascript
//en mostrarHolaMundo no le ponemos () para que se ejecute cuando nosotros pulsamos
//click, sino se ejecuta antes de darle al botón
document.getElementById('boton').addEventListener('click', mostrarHolaMundo)

function mostrarHolaMundo() {
    document.querySelector('#mensaje').innerHTML = 'Hola mundo'
    console.log('Esto es un mensaje de consola')

}