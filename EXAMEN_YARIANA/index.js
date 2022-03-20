import express from "express"
import fetch from 'node-fetch'
const app = express()
import cors from 'cors';
import bodyParser from 'body-parser'

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

try {
    app.listen(6800, () => {
        console.log('Servidor encendido');
    })
} catch (err) {
    console.error('Fallo al cargar el server')
}

let url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';
let response = await fetch(url);
let data = await response.json();

for (let i = 0; i < data.length; i++) {
    data = [{ "id": i, "name": i, "army_type": i }]
    console.log(data)
}

app.post('/login', (req, res) => {
    /*const user = req.body.user
    const password = req.body.password*/
    const { user, password } = req.body // Es necesario parsear el body
    console.log(user, password)
    res.send(`gracias ${user} por enviar los datos para loguearte`)
})

app.get('/formulario', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

app.get('/', async(req, res) => {
    let response = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    let data = await response.json();
    const { id, name, army } = req.query
    res.status(200).json({
        id: `${id}`,
        name: `${name}`,
        army: `${army}`
    })
})