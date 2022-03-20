let express = require('express')

let app = express()
app.set('view engine', 'ejs')

/*- Si un cliente accede a la ruta http://localhost:5000/saluda le devolverá un saludo*/
app.get('/saluda', (req, res) => {
    res.render('index.ejs', { nombre: 'Angel' })
})


/*- Si un cliente accede a la ruta http://localhost:5000/dia le devolverá la fecha actual*/
app.get('/dia', (req, res) => {
    const fecha = new Date()
    const fechaFormateada = new Intl.DateTimeFormat('es-ES').format(fecha)
    res.send(fechaFormateada)
})

/*- Si un cliente accede a la ruta http://localhost:5000/carta nos devolverá un fichero en formato json con la carta (simple) de un restaurante*/
app.get('/carta', (req, res) => {
    const datosJson = {
        primerPlato: ['carne', 'pollo'],
        segundoPlato: ['ensalada'],
        postre: ['tarta abuela', 'tarta fría']
    }
    res.json(datosJson)
})





//TODO async await
app.listen(5000, () => {
    console.log('Servidor encendido')
})

module.exports = app;