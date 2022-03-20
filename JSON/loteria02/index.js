const express = require('express');

const app = express();
let cors = require('cors');
app.use(cors());

const csv = require('csv-parser')
const fs = require('fs')

app.get('/', (req,res) => {
   res.send('hola')
})

let resultsGanadores = [];

mapa = new Map();


function cargarDatos(){
    fs.createReadStream('./resultados/resultados01.csv')
        .pipe(csv())
        .on('data' , row => {

            Object.keys(row).forEach( num , index=> {
                if (index >= 1 && index <= 6) {
                    if (mapa.has( row[num] ) ) mapa.set( row[num] , mapa.get(row[num]) + 1);
                    else mapa.set(row[num] , 0);
                }
            })



    }).on('end' , () => {
        console.log(mapa);
        let mapaOrdenador=new Map([...mapa.entries()].sort((a,b)=>b[1]-a[1]));
        console.log(mapaOrdenador);
        resultsGanadores =[...mapaOrdenador.keys()].slice(0,6);
    })
}

cargarDatos();

app.listen(4000, () => {
    console.log('Servidor encendido')
})
