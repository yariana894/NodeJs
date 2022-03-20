import express from "express"
import path from "path"
import nodeFetch from "node-fetch"

const __dirname = path.resolve()

const app = express()

app.set('view engine', 'ejs')

app.get('/', async(req, res) => {
    const url = 'https://datahub.io/core/co2-ppm/r/co2-annmean-mlo.json'
    const respuesta = await nodeFetch(url)

    const datosJson = await respuesta.json()
    console.log(datosJson)

    res.render(__dirname + '/views/index', { datos: datosJson })
        //res.send('Hola desde el servidor'))
})

try {
    await app.listen(4000)
    console.log('Servidor arrancado en el puerto 4000')
} catch (err) {
    console.err('Fallo al arrancar el servidor: ', err)
}