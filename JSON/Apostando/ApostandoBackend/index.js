var app = require('express')();
var http = require('http').createServer(app);
var cors = require('cors')
const csv = require('csv-parser');
const fs = require('fs');


app.use(cors())

http.listen(4000, () => {
    console.log('Servidor arrancado correctamente y a la escucha en el puerto 4000')
})

app.get('/', (req, res) => {
    res.send(numerosGanadores)
})

datos = []


//numeros=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
mapa = new Map()
    /*mapa.set(clave,valor)
    mapa.get(clave) //valor
    mapa.has(clave) // boolean
    mapa.size*/
let numerosGanadores = []

function cargarDatos() {
    fs.createReadStream('Lotoideas.com - Histórico de Resultados - Primitiva - 1985 a 2012.csv')
        .pipe(csv())
        .on('data', row => {
            Object.keys(row).forEach((num, index) => {
                if (index >= 1 && index <= 6) {
                    if (mapa.has(row[num])) mapa.set(row[num], mapa.get(row[num]) + 1)
                    else mapa.set(row[num], 0)
                }
            })

        })
        .on('end', () => {
            console.log(mapa)
            let mapaOrdenador = new Map([...mapa.entries()].sort((a, b) => b[1] - a[1]))
            console.log(mapaOrdenador)
            numerosGanadores = [...mapaOrdenador.keys()].slice(0, 6)
        })
}

cargarDatos()