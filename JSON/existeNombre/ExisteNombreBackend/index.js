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
    res.send(`hola`)
})

nombre_hombres = []
nombre_mujeres = []
apellidos_lista = []

function cargaDatos() {
    fs.createReadStream('hombres.csv')
        .pipe(csv())
        .on('data', row => {
            nombre_hombres.push(row.nombre)
        })

    fs.createReadStream('mujeres.csv')
        .pipe(csv())
        .on('data', row => {
            nombre_mujeres.push(row.nombre)
        })

    fs.createReadStream('apellidos.csv')
        .pipe(csv())
        .on('data', row => {
            apellidos_lista.push(row.apellido)
        })
}

cargaDatos()

app.get('/existe/:nombre', (req, res) => {
    const { nombre } = req.params
    console.log(nombre)
    res.json({
        nombre_de_hombre: nombre_hombres.includes(nombre.toUpperCase()),
        nombre_de_mujer: nombre_mujeres.includes(nombre.toUpperCase()),
    })
})


app.get('/existe', (req, res) => {

    const { nombre, apellidos } = req.query
    res.json({
        nombre_de_hombre: nombre_hombres.includes(nombre.toUpperCase()),
        nombre_de_mujer: nombre_mujeres.includes(nombre.toUpperCase()),
        apellidos: apellidos_lista.includes(apellidos.toUpperCase()),
    })
})

// Crea un endpoint que permita conocer 
// cuantos nombres de hombres y mujeres (juntos) tienes en tu BD
// devolvemos un numero

app.get('/total_nombres', (req, res) => {
    const contHombres = nombre_hombres.length
    const contMujeres = nombre_mujeres.length
    res.json({
        total_nombres: contHombres + contMujeres
    })
})