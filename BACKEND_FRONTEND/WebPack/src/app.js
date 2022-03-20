import { suma, cuadrado } from './utilidades'
import './styles.css'
import * as Tone from 'tone'

console.log(suma(3, 4))

console.log(cuadrado(4))

const synth = new Tone.Synth().toDestination();

const sonarDO = () => synth.triggerAttackRelease("C4", "8n");
const sonarRE = () => synth.triggerAttackRelease("D4", "8n");

document.getElementById('do').addEventListener('click', sonarDO)
document.getElementById('re').addEventListener('click', sonarRE)
document.addEventListener('keydown', pulsoTecla)

function pulsoTecla(event) {
    if (event.key == 'a') sonarDO()
    else if (event.key == 's') sonarRE()
}