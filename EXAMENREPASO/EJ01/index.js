import express from 'express';
import cors from 'cors'
import fetch from "node-fetch";
import bodyParser from "body-parser";

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(6800, () => console.log('servidor encendido'))

app.get('/civilizaciones', async (req, res) => {
    const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
    const request = await fetch(url)
    const data = await request.json()
    const dataFilteredByAgeOfKing = data.civilizations.filter(element => element.expansion === 'Age of Kings')
    const mappedAgeOfKings = dataFilteredByAgeOfKing.map(element =>
        ({
            id: element.id,
            name: element.name,
            army_type: element.army_type
        })
    )
    res.json(mappedAgeOfKings)
})

app.get('/buscar_unidades', async (req, res) => {
    const {nombre, ataque} = req.query
    const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/units'
    const request = await fetch(url)
    const data = await request.json()
    let datosFiltrados = data["units"].filter(element => element.expansion === 'Age of Kings')

    if (nombre && ataque) datosFiltrados = datosFiltrados.filter(c => c.name.includes(nombre) && c.attack >= ataque)
    if (nombre && !ataque) datosFiltrados = datosFiltrados.filter(c => c.name.includes(nombre))
    if (!nombre && ataque) datosFiltrados = datosFiltrados.filter(c => c.attack >= ataque)

    const datosFiltradosYMappeados = datosFiltrados.map(c =>
        ({
            id: c.id,
            name: c.name,
            description: c.description,
            expansion: c.expansion,
            cost: c.cost,
            build_time: c.build_time,
            attack: c.attack,
            armor: c.armor
        })
    )
    res.json(datosFiltradosYMappeados)
})


app.get('/existe/:nombre', async (req, res) => {
    const nombreCivilizacion = req.params.nombre

    const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
    const request = await fetch(url)
    const data = await request.json()

    const searchDataCivilization = data["civilizations"].filter(
        element => element.name.toLowerCase().trim() === nombreCivilizacion.toLowerCase().trim()
    )

    if (searchDataCivilization.length > 0) res.json({existe: true})
    else
        res.json({existe: false})
})

app.post('/login', (req, res) => {
    const {user, password} = req.body
    res.send(`Gracias ${user} por enviar los datos para loguearte`)
})


/*devuelve todas las civilizaciones que empiecen por A(sin distinguir mayusculas
* y minúsculas y que el army_type contenga la palabra archer*/

app.get('/buscar_letra/:letra/:army', async (req, res) => {
    const {letter, army} = req.params

    const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
    const request = await fetch(url)
    const data = await request.json()
    const filteredArmy = data["civilizations"].filter(element => element.army_type.toLowerCase().trim().includes(army.toLowerCase().trim())
        && element.name.charAt(0).toLowerCase() === 'm')

    const armyMapped = filteredArmy.map(element =>
        ({
            id: element.id,
            name: element.name,
            army_type: element.army_type
        }))
    res.json(armyMapped)
})




