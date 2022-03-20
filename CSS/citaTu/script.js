/*<article class="quote">
      <div class="quote-text">
        <p> <i class="fas fa-quote-right quote-icon"></i> Blablabla</p>
      </div>
      <nav class="quote-menu">
        <a class="link" href="#"> <i class="fas fa-clipboard-check"></i> </a>
        <a class="link" href="#"> <i class="fas fa-eye"></i> </a>
        <a class="link" href="#"> <i class="fas fa-trash-alt"></i> </a>
      </nav>
    </article>*/

let quoteList = [];
document.getElementById('add').addEventListener('click', add);

function add() {
    let msg = prompt('Introduce la cita');
    let id = Math.round(Math.random()*1000) + '';
    quoteList.push({id, msg, complete:false});
    showQuotes();
}

function loadFromLocalStorage(){
    let info = localStorage.getItem('info');
    if (!info)return

    quoteList = JSON.parse(info);
    showQuotes();
}

loadFromLocalStorage();

function saveOnLocalStorage(){
    localStorage.setItem('info', JSON.stringify(quoteList));
}

function showQuotes(){
    let quotes = document.getElementById('quotes');

    //remove childs
    while( quotes.lastElementChild) {
        quotes.removeChild(quotes.lastElementChild);

        quoteList.forEach(quote =>{
            let article = createQuote(quote.id, quote.msg, quote.complete);
            quotes.appendChild(article);
        })
    }
}


function createQuote(id, textoFrase, complete){
    let article = document.createElement('article');
    let div = document.createElement('div');
    let p = document.createElement('p');
    let i = document.createElement('i');
    let frase = document.createTextNode(textoFrase);
    let nav = document.createElement('nav');
    let a1 = document.createElement('a');
    let a2 = document.createElement('a');
    let a3 = document.createElement('a');
    let i1 = document.createElement('i');
    let i2 = document.createElement('i');
    let i3 = document.createElement('i');

    //añadir las clases
    article.setAttribute('class', 'quote');
    article.setAttribute('id', id);

    div.setAttribute('class', 'quote-text');
    i.setAttribute('class', 'quote-icon fas fa-quote-right');
    nav.setAttribute('class', 'quote-menu');
    a1.setAttribute('class', 'link');
    a2.setAttribute('class', 'link');
    a3.setAttribute('class', 'link');
    i1.setAttribute('class', 'fas fa-clipboard-check');
    i2.setAttribute('class', 'fas fa-eye');
    i3.setAttribute('class', 'fas fa-trash-alt');

    //jerarquia
    article.appendChild(div);
    article.appendChild(nav);
    div.appendChild(p);
    p.appendChild(i);
    p.appendChild(frase);
    nav.appendChild(a1);
    nav.appendChild(a2);
    nav.appendChild(a3);
    a1.appendChild(i1);
    a2.appendChild(i2);
    a3.appendChild(i3);

    //eventos
    a1.addEventListener('click', completeQuote);
    a2.addEventListener('click', detailQuote);
    a3.addEventListener('click', deleteQuote);



    return article;
}

let completeQuote = () =>{

}
let detailQuote = () =>{

}
function deleteQuote () {
    const id = this.parentNode.id;
    quoteList = quoteList.filter(quote => quote.id !== id);
    saveOnLocalStorage();
    showQuotes();
}

document.getElementById('removeAll').addEventListener('click', removeAll);
function removeAll(){
    quoteList = [];
    saveOnLocalStorage();
    showQuotes();
}


function detailQuote(){

}