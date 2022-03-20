import './styles.css'
import './styles.scss'
import aa from './age.jpg'

document.getElementById('elegir').addEventListener('click', elegir)
document.getElementById('limpiar').addEventListener('click', limpiar)
document.getElementById('imagen').src = aa

function elegir() {
    const nombresCivilizaciones = document.getElementById('nombres').value
    const cantidadCivilizaciones = document.getElementById('cantidad').value

    let civiGood = []
    let arrayBad = []
    let arrayGood = []
    let array = nombresCivilizaciones.split(',')

    async function peticion() {
        for (let i = 0; i < array.length; i++) {
            try {
                const res = await fetch(`http://localhost:6800/existe/${array[i]}`)
                const json = await res.json()
                if (json.existe === true)
                    arrayGood.push(array[i])
                else
                    arrayBad.push(array[i])
            } catch {
                error => console.log("Error al conectar con el backend")
            }
        }

        for (let i = 0; i < cantidadCivilizaciones; i++) {
            let random = Math.floor(Math.random() * arrayGood.length)//Generamos un nº random según el nº de elementos del array

            if (!civiGood.includes(arrayGood[random]))  //Si donde guardamos el resultado con randoms NO incluye lo que guardamos del texarea
                civiGood.push(arrayGood[random]) //lo añade
            i++ //Suma el contador cuando hace lo que tiene que hacer

            let uniqueRandoms = [...new Set(civiGood)];
            console.log(uniqueRandoms)

            document.getElementById('select').innerHTML = uniqueRandoms
            document.getElementById('incorrect').innerHTML = arrayBad
        }

        peticion()
    }

    function limpiar() {
        document.getElementById('nombres').value = ''
        document.getElementById('incorrect').innerHTML = ''
        document.getElementById('select').innerHTML = ''
        document.getElementById('cantidad').value = ''
    }