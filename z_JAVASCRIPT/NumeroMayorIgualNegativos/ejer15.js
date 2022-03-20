document.getElementById('add').addEventListener('click', refresh); 

function addElement(){
    let element = document.getElementById('element').value;
    let li = document.createElement('li');
    let liContent = document.createTextNode(element);
    li.appendChild(liContent);
    document.getElementById('list').appendChild(li);
}

function primo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }

function updateInfo(){
   let lis = document.getElementById("list").getElementsByTagName("li");
   let list = [];
   for(let i = 0; i < lis.length; i++){
       list.push(lis[i].textContent);
   }

   let mayor = 0;
   let media = 0;
   let mediaPositivos = 0;
   let mayoresCinco = 0;
   let entreTres = 0;
   let negativos = 0;
   let primos = 0;
   let positivos = 0;

    for (let i = 0; i < list.length; i++) {
        if(parseInt(list[i]) > mayor){
            document.getElementById("mayor").innerHTML = parseInt(list[i]);
        }
        media += parseInt(list[i]);
        if(parseInt(list[i]) > 0){
            mediaPositivos += parseInt(list[i]);
            positivos++;
        }
        if(parseInt(list[i]) > 5){
            mayoresCinco++;
        }
        if(parseInt(list[i]) >= -3 && parseInt(list[i]) <= 3){
            entreTres++;
        }
        if(parseInt(list[i]) < 0){
            negativos++;
        }
        if(primo(parseInt(list[i])) == true){
            primos++;
        }
    }

    
    document.getElementById("media").innerHTML = parseInt(media) / parseInt(list.length);
    document.getElementById("mediaPos").innerHTML = parseInt(mediaPositivos) / positivos;
    document.getElementById("mayoresCinco").innerHTML = mayoresCinco;
    document.getElementById("entreTres").innerHTML = entreTres;
    document.getElementById("negativos").innerHTML = negativos;
    document.getElementById("primos").innerHTML = primos;
    list = [];
}

function refresh(){
    addElement();
    updateInfo();
}

