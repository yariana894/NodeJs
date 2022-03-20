let express = require('express')
let bodyParser = require('body-parser')
let mysql = require('mysql')

let app = express()
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*
app.get('/', responderHola)

function responderHola(req, res) {
    //....

}*/

/* con landas sería así*/
app.get('/', (req, res) => {
    res.send('Hola desde el backend')
})


//para que me aparezca la fecha cuando pongo
app.get('/fecha', (req, res) => {
    const fecha = new Date()
    const fechaFormateada = new Intl.DateTimeFormat('es-ES').format(fecha)
    res.send(fechaFormateada)
})


app.get('/listaProfesores', (req, res) => {
    res.send(`
    <html>
        <body>
            <ul>
                <li>Angel</li>
                <li>Bea</li>
                <li>Pepe</li>
            </ul>
        </body>
    </html>
    `)
})

app.get('/listaAlumnos', (req, res) => {
    const datosJson = {
        nombre: 'Juanito',
        edad: 19
    }
    res.json(datosJson)
})

app.get('/formulario', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


/*cuando le ponemos delante de número : se convierte en
un parámetro*/
app.get('/:numero/cuadrado', (req, res) => {
    //const numero = req.params.numero1
    const { numero } = req.params
    const float = parseFloat(numero)
    res.send('' + (float * float))
})

/*escribir hola xxxx en mayúscula*/
app.get('/:nombre/saluda', (req, res) => {
    const nombre = req.params.nombre
    res.send('HOLA ' + nombre.toUpperCase())
})

app.get('/saluda/:nombre', (req, res) => {
    //const nombre = req.params.nombre
    const { nombre } = req.params
    res.send(`Hola que tal estas ${nombre.toUpperCase()} `)
})

app.get('/datos_personales', (req, res) => {
    /*const nombre = req.query.nombre
    const apellidos = req.query.apellidos
    const pais = req.query.pais
    const ciudad = req.query.ciudad*/
    const { nombre, apellidos, pais, ciudad } = req.query
    res.status(200).json({
        nombre: `${nombre} ${apellidos}`,
        lugar: `${pais} ( ${ciudad} )`
    })
})

app.post('/login', (req, res) => {
    /*const user = req.body.user
    const password = req.body.password*/
    const { user, password } = req.body // Es necesario parsear el body
    console.log(user, password)
    res.send(`gracias ${user} por enviar los datos para loguearte`)
})


app.get('/pagina_ejs', (req, res) => {
    res.render('index.ejs', { nombre: 'Angel' })
})



let con = mysql.createConnection({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: 'Ad1234',
    database: 'cebem'
})

con.connect(error => {
    if (error) console.error('Fallo al conectarse a la BD', error)
    else console.log('Conexión correcta con la BD')
})

app.get('/profesores', (req, res) => {
    const query = 'select * from profesor'
    con.query(query, (error, resultado) => {
        if (error) console.error('fallo al hacer la consulta select', error)
        else res.send(resultado)
    })
})



/*EJERCICIO 1 NODEJS CLASSROOM*/
app.get('/raiz', (req, res) => {
    res.sendFile(__dirname + '/views/raiz.html')
})


//para introducir los datos
app.post('/registroDatos', (req, res) => {
    /*const user = req.body.user
    const password = req.body.password*/
    const { user, email, password, repPass } = req.body // Es necesario parsear el body
    console.log(user, email, password, repPass)
    res.send(`gracias ${user} por enviar los datos para loguearte`)
})

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/views/registro.html')
})

//ciudades
app.get('/ciudades', (req, res) => {
    const datosJson = {
        nombre: ['Vigo', 'shosf']
    }
    res.json(datosJson)
})


//TODO async await
app.listen(4000, () => {
    console.log('Servidor encendido')
})