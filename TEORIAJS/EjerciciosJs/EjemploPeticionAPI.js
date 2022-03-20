/*El siguiente código hace una llamada a un API, y devuelve un JSON (un objeto de javascript)
 con información completa de un usuario (random).*/


const url = ('https://randomuser.me/api');

fetch(url)
.then(response => response.json())
.then(jsonApi => {
    document.getElementById('nombre').innerHTML = jsonApi.results[0].name.first;
    document.getElementById('apellidos').innerHTML = jsonApi.results[0].name.last;
    document.getElementById('email').innerHTML = jsonApi.results[0].email;
    document.getElementById('calle').innerHTML = jsonApi.results[0].location.street.name;
}).catch(err => console.error('error'))
