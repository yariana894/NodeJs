//crear el servidor web

const express = require('express');
const app = express();
let cors = require('cors');
app.use(cors());

const csv = require('csv-parser')
const fs = require('fs')

const resultsHombre = [];
const resultsMujer = [];


let resultsHombreSize = resultsHombre.length;
let resultsMujerSize = resultsMujer.length;


fs.createReadStream('./spanish-names-master/hombres.csv')
    .pipe(csv())
    .on('data', (data) => resultsHombre.push(data))
    .on('end', () => {
        console.log(resultsHombre)
    });

fs.createReadStream('./spanish-names-master/mujeres.csv')
    .pipe(csv())
    .on('data', (data) => resultsMujer.push(data))
    .on('end', () => {

    });

app.get('/existe/:nombre', async (req, res) => {




    const nombreHombre = req.params.nombre;
    for (let i = 0; i < resultsHombreSize; i++ )
        resultsHombre[i] === nombreHombre ? res.json({'nombre_de_hombre' :true, 'nombre_de_mujer' :false}) : null;


    const nombreMujer = req.params.nombre;
    for (let i = 0; i < resultsMujerSize; i++ )
        resultsMujer[i] === nombreMujer ? res.json({'nombre_de_mujer' :true, 'nombre_de_hombre' :false}) : null;

} )


app.listen(4000, () => {
    console.log('Servidor encendido')
})



