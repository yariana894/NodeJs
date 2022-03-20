document.getElementById('boton').addEventListener('click' , getFoxy)

async function getFoxy(){

    const response =  await fetch('http://localhost:4000/');
    const data = await response.json();

    console.log(data)
    document.getElementById('foto').src = data;

}