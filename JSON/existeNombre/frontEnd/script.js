document.querySelector('#comprobar').addEventListener('click', comprobar)

async function comprobar() {
    const nombre = document.querySelector('#nombre').value
    const apellidos = document.querySelector('#apellidos').value

    if (apellidos) {
        //existe?nombre=XXX&apellidos=YYYY
        try {
            //peticion
            const res = await fetch(`http://localhost:4000/existe?nombre=${nombre}&apellidos=${apellidos}`)

            //se pasan a json
            const json = await res.json
            console.log(json)

            //se hacen cosas con los datos
            const msgNombre = json.nombre_de_hombre || json.nombre_de_mujer ?
                'El nombre existe' : 'El nombre no existe'
            const msgApell = json.apellidos ?
                'el apellidos existe' : 'el apellido no existe'
            document.querySelector('#resultado').innerHTML = msgNombre + ' ' + msgApell

        } catch {
            error => console.log("Error al conectar con el backend")
        }

    } else {
        //existe/xxx (nombres) CON PROMESAS
        //async/awai promesas
        /* fetch('http://localhost:4000/existe/' + nombre)
             .then(res => res.json())
             .then(json =>
                 document.querySelector('#resultado').innerHTML = json.nombre_de_hombre || json.nombre_de_mujer ?
                 'El nombre existe' : 'El nombre no existe'
                 //{nombre_de_hombre: false, nombre_de_mujer: false}
             ).catch(error => console.error("Error al conectar con el backend"))*/

        //existe/xxx (nombres) CON ASYNC
        try {
            const res = await fetch('http://localhost:4000/existe/' + nombre)
            const json = await res.json()
            document.querySelector('#resultado').innerHTML = json.nombre_de_hombre || json.nombre_de_mujer ?
                'El nombre existe' : 'El nombre no existe'
            //{nombre_de_hombre: false, nombre_de_mujer: false}]

        } catch {
            error => console.log("Error al conectar con el backend")
        }
    }
}