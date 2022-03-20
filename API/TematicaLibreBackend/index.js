import express from "express"
import fetch from 'node-fetch'
const app = express()
import cors from 'cors';
app.use(cors());

try {
    app.listen(4000, () => {
        console.log('Servidor encendido');
    })
} catch (err) {
    console.error('Fallo al cargar el server')
}



let url = 'https://api.thecatapi.com/v1/images/search';
let response = await fetch(url);
let data = await response.json();
console.log(data);



app.get('/', async(req, res) => {
    let response = await fetch('https://api.thecatapi.com/v1/images/search');
    let data = await response.json();
    res.json(data[0].url)

})