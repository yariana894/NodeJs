
//el import es si usamos modulos
import express from "express"
import fetch from 'node-fetch'
const app = express()
import cors from 'cors';
app.use(cors());


try{
    app.listen(4000, () => {
    console.log('Servidor encendido');
    })
}catch (err) {
    console.error('Fallo al cargar el server')
}


//imprimir por pantalla
let url ='https://randomfox.ca/floof/';
let response = await fetch(url);
let data = await response.json();
console.log(data);


app.get('/' , async (req , res) => {
    let url ='https://randomfox.ca/floof/';
    let response = await fetch(url);
    let data = await response.json();

    res.json( data.image );
})






